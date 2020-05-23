//global model containing search criteria, the current video and the video collection
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      search: '',

      currentVid: null,

      videos: new VideoCollection()
    }
  }

});



//Main view where videos are displayed and searched
//A user should be able to search something in the
//search bar, and get a list of videos back, with one showing up in the main screen.
var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'searchVideo'//when the main button is clicked, the searchVideo function is initiated
  },

  initialize: function () {
    this.$mainSearch = this.$('#main-search');//variable for the main search data
    this.$mainVideo = this.$('.main-video'); //variable pointing to where main vid will go
    this.$videoList = this.$('#video-list');//points to video collection
    // everytime a search is made I will need to render
    this.listenTo(this.model, 'change:currentVid', this.renderVideo);
    this.renderVideos();//ensures that hardcoded vids get loaded
  },

  searchVideo: function () {
    // console.log('test');
    // this.model.get('VideoCollection').addVideo //I don't think I need this?
    // console.log(this.$mainSearch.val())//tests that the search input and button are connected
    var playingVid = this.$mainSearch.val()
    this.model.set('currentVid', playingVid);//sets the models currentVid attribute with the user input

    console.log(this.model.get('currentVid'))//tests that the model is being set with the input val
  },


  renderVideo: function (videoModel) {
    // console.log('test')//test that function is connected to change in model
    var view = new VideoView ({model: videoModel});

    this.$videoList.append(view.render().el)
    console.log('is this working')
  },


  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
      }, this);
    }

});




//Model for individual videos
var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
    videoId: '',
    title: '',
    description: '',
    thumbnails: '',
    main_vid: false,
    }
  }
});

//collection of video models
var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=AIzaSyCeEoGSG_koWvcWUt0YzVNqz36gg559X9M',
  model: VideoModel,

  // function used to add videos in manually. will remove
  addVideo: function (videoId, title, description, thumbnails) {
    this.add({
      videoId: videoId,
      title: title,
      description: description,
      thumbnails: thumbnails
    });
  },


  parse: function (response) {
      return response.items.map(function (items) {
        return {
          videoId: items.id.videoId,
          title: items.snippet.title,
          description: items.snippet.description,
          thumbnails: items.snippet.thumbnails.default.url
        }
      });
    },

    // A function that will change the search item

});


//adds a video view and appends it to main video section
var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  events: {
    'click .thumbnail': 'toggleMainVideo'
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  toggleMainVideo: function () {
    this.model.set('main_vid', !this.model.get('main_vid'))
  }

});



var appModel = new AppModel();

  appModel.get('videos').addVideo("fBYvHHT8fdE", "Cute wowowowowowPuppies", "Cutest Dogs Thanks For Watching", "https://i.ytimg.com/vi/fBYvHHT8fdE/default.jpg");
  appModel.get('videos').addVideo("wtH-hdOF1uA", "Baby wowowowowoowwoDogs", "try not to laugh", "https://i.ytimg.com/vi/wtH-hdOF1uA/default.jpg");
  appModel.get('videos').addVideo("BkD2nN5275c", "Funny Pet Animals Videos", "very cute compilation", "https://i.ytimg.com/vi/BkD2nN5275c/default.jpg");

var appView = new AppView({ model: appModel });

// var videos = new VideoCollection();
// videos.on('add', function (video) { console.log(video.toJSON()); });
// videos.fetch();
appModel.get('videos').fetch({reset: true})
