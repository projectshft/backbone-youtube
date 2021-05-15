var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videoId: "",
      videoThumbnamil: "",
      videoTitle: "",
      videoDesc: "",
    };
  },

  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cercle&type=video&videoEmbeddable=true&key=AIzaSyCjo4u-wcr_ExFNPxiYlWZP3LLr-ythijE",

  parse: function (response) {
    return {
        videoId: response.items[0].id.videoId,
        videoThumbnail: response.items[0].snippet.thumbnails.default.url,
        videoTitle: response.items[0].snippet.title,
        videoDesc: response.items[0].snippet.description,
      };
  },
});

// Videos collection - add API fetch here
var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  initialize: function () {
    this.on('add', function (model) {
      model.fetch();
    })
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
    };
  }
});

var VideoView = Backbone.View.extend({
  // template: Handlebars.compile($('#main-display-template').html()),

  // render: function () {
  //   this.$el.html(this.template(this.model.toJSON()));
  // }
});

var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click .search": "newSearch", 
  },
  
  initialize: function () {
    this.$search = this.$('#search');
    this.listenTo(this.model.get('videos'), 'change', this.renderVideo);
    this.$mainspot = this.$('.main-spot');
  },

  newSearch: function () {
    var topic = this.$search.val();

    this.model.get('videos').add({
      topic: topic
    });
  },

  renderVideo: function (model) {
    console.log(model);
    var videoView = new VideoView({ model: model });

    this.$mainspot.append(videoView.render().el);
    debugger;
  }
});

var appModel = new AppModel();
var appView = new AppView ({ model: appModel });

