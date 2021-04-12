// The app collection
const AppCollection = Backbone.Collection.extend({
  // grabs the url thats passed down from the input
  url() {
    return this.models[0].attributes.url;
  },
  // on the first instance on the add event do the api fetch
  initialize() {
    this.on('add', function (model) {
      model.fetch();
    });
  },
});

// the App Model that references the collection
const AppModel = Backbone.Model.extend({
  defaults() {
    return {
      videos: new AppCollection(),
    };
  },
});

// the App View that grabs the input and renders the clickable images
const AppView = Backbone.View.extend({
  el: 'body',

  // handlebars template
  template: Handlebars.compile($('#vid-list').html()),

  // event for the click on the input button invokes the add to model
  events: {
    'click .search-btn': 'videoSearchAdd',
  },

  // on instance grab the input id & listene to changes on the videos model and call renderThumbnails
  initialize() {
    this.$searchInput = this.$('#search-input');
    // this.$vidView = $('.vid-container');?
    this.listenTo(this.model.get('videos'), 'change', this.renderThumbnails);
  },

  // this function grabs the value of input adds it to the model so it could be grabbed by the url search
  videoSearchAdd() {
    const inputValue = this.$searchInput.val();

    const urlInput = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${inputValue}&type=video&videoEmbeddable=true&key=AIzaSyCn7T_poRhx_PIw7R7PrfqQXYuRJH8RQjw`;
    this.model.get('videos').add({
      url: urlInput,
    });
  },

  //  renders the the clickable images of the videos on the right side of page
  renderThumbnails() {
    const mapped = this.model.attributes.videos.models[0].attributes.items.map(
      function (i) {
        return {
          url: i.snippet.thumbnails.high.url,
          title: i.snippet.title,
        };
      }
    );

    for (let i = 0; i < mapped.length; i++) {
      this.$el.find('.thumbnail-container').append(this.template(mapped[i]));
    }
  },
});

// a view to display a video when clicked and on fetch grabs the first video and displays it
const VidView = Backbone.View.extend({
  el: 'body',

  // handlebars
  template: Handlebars.compile($('#main-vid').html()),

  // listens to click on the video images
  events: {
    'click .thumbnail': 'renderVid',
  },

  // on instance listens to change on model then invokes the render of the first video
  initialize() {
    this.listenTo(this.model.get('videos'), 'change', this.renderDefaultVideo);
  },

  // renders the first video on initial search
  renderDefaultVideo() {
    const $mapped = this.model.attributes.videos.models[0].attributes.items.map(
      function (i) {
        return {
          videoId: i.id.videoId,
          title: i.snippet.title,
        };
      }
    );
    this.$el.find('.main-video').html(this.template($mapped[0]));
  },

  // render one of the clickable images into the main playable video
  renderVid(e) {
    const $e = $(e);
    e.preventDefault();
    const $mapped = this.model.attributes.videos.models[0].attributes.items.map(
      function (elem) {
        if (
          elem.snippet.thumbnails.high.url === $e[0].currentTarget.currentSrc
        ) {
          return {
            videoId: elem.id.videoId,
            title: elem.snippet.title,
          };
        }
      }
    );

    const videoClicked = $mapped.filter(function (i) {
      return i !== undefined;
    });
    // renders the first video
    this.$el.find('.main-video').html(this.template(videoClicked[0]));
  },
});

// instance of the AppModel
const appModel = new AppModel();
// instance of the AppView
const appView = new AppView({
  model: appModel,
});
// instance of the VidView
const vidView = new VidView({
  model: appModel,
});

/* 
   • Could not get it to destroy the model and create a new model on a new search and rerender to page 
*/

/*
  • to see the sample code after youtube refuses to make new api calls; just comment out <script src="main.js"></script> and un-comment <script src="sample-render.js"></script>
*/
