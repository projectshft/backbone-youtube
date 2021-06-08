var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videoId: "",
      videoThumbnamil: "",
      videoTitle: "",
      videoDesc: "",
    };
  },
});

// Videos collection - add API fetch here
var VideosCollection = Backbone.Collection.extend({ 
  url: function () {
      return "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cercle&type=video&videoEmbeddable=true&key=AIzaSyCjo4u-wcr_ExFNPxiYlWZP3LLr-ythijE";
    },

  model: VideoModel,

  initialize: function () {
    this.on("add", function (model) {
      model.fetch();
    });
  },
  
  parse: function (response) {
    return response.items.map(function (x) {
      return {
        videoId: x.id.videoId,
        videoThumbnail: x.snippet.thumbnails.default.url,
        videoTitle: x.snippet.title,
        videoDesc: x.snippet.description,
      }
    })
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      currentVideo: null,

      currentUrl: null,
    };
  },

  // v2 newMain should merely update the AppModel with a new current_video. Then the AppView can listen for a change on current_video and then call renderMainVideo.
  updateMainVideo: function (id) {
    var allVideos = this.get("videos");

    var currentVid = allVideos.findWhere({ videoId: id });
    
    this.set("currentVideo", currentVid);
  },

  updateUrl: function (topic) {
    var newString =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + topic + "&type=video&videoEmbeddable=true&key=AIzaSyCjo4u-wcr_ExFNPxiYlWZP3LLr-ythijE";
    var topic = this.set("currentUrl", newString);
    console.log(this);
  }
});

var VideoView = Backbone.View.extend({
  className: 'video',  // to reference later

  template: Handlebars.compile($('#five-display-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});

var MainVideoView = Backbone.View.extend({
  className: 'mainVideo',

  template: Handlebars.compile($('#main-display-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})

var AppView = Backbone.View.extend({
  el: $("body"),

  // v2 changed .click-here to .video-select and updated html accordingly
  events: {
    "click .search": "newSearch", 
    "click .video-select": "newMain"
  },
  
  initialize: function () {
    //this.$search = this.$('#search');
    // v2 refactor
    this.listenTo(this.model.get("videos"), "change", function () {
      this.renderVideo();
      this.renderMainVideo();
    });

    this.$mainspot = this.$('.five-spot');
    // v2 refactor
    this.listenTo(this.model.get('videos'), 'reset', function () {
      this.renderVideos();
      this.renderMainVideo();
    });

    this.listenTo(this.model, 'change:currentVideo', this.renderMainVideo);
    this.listenTo(this.model, 'change:currentUrl', this.renderMainVideo);
    this.listenTo(this.model, 'change:currentUrl', this.renderVideos);

    this.renderMainVideo;
  },

  newSearch: function () {
    var inputTopic = this.$('.topic').val();

    // v2 fix what is set
    this.model.updateUrl({topic: inputTopic});
    // listen to change of model should notice new url and run render functions
  },

  renderVideo: function (model) {
    var videoView = new VideoView({ model: model });

    this.$('.five-display').append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (v) {
      this.renderVideo(v);
    }, this);
  },

  renderMainVideo: function () {
    if (this.mainVideoView) {
      this.mainVideoView.remove();
    }

    this.mainVideoView = new MainVideoView({
      model: this.model.get("currentVideo"),
    });

    // v2 added: set the first video to load if prev 3 lines of code pull a null model
    if(!this.mainVideoView.model){
      this.model.updateMainVideo("9wbZEPrFd10");
    }

    this.$(".main-display").html(this.mainVideoView.render().el);
  },

  newMain: function (e) {
    // v2 added var
    var newId = $(e.currentTarget).data().id;
  
    // v2 newMain should merely update the AppModel with a new current_video. Then the AppView can listen for a change on current_video and then call renderMainVideo.
    this.model.updateMainVideo(newId);
  }
});

var appModel = new AppModel();

var appView = new AppView ({ model: appModel });

appModel.get('videos').fetch({ reset: true });

