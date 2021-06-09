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

  // v2 remove useless initialize
  
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

      currentVideo: null
    };
  },

  // v2 move initialize for model from view to model
  initialize: function () {
    this.listenTo(this.get('videos'), 'reset', this.updateMainVideo);
  },

  // v2 newMain should merely update the AppModel with a new current_video. Then the AppView can listen for a change on current_video and then call renderMainVideo.
  updateMainVideo: function (id) {
    var allVideos = this.get("videos");

    // if none selected (new reset of search or page open/refresh), select the first
    var CurrentVid = null;
    if (typeof id !== 'object') {
      currentVid = allVideos.findWhere({ videoId: id });
    } else
      currentVid = allVideos.at(0);
    
    this.set("currentVideo", currentVid);
  },

  updateUrl: function (topic) {
    var newString =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + topic + "&type=video&videoEmbeddable=true&key=AIzaSyCjo4u-wcr_ExFNPxiYlWZP3LLr-ythijE";
    
    // apply new url to the collection to re-fetch with
    this.get('videos').url = newString;

    // force fetch with new url
    this.get('videos').fetch({ reset: true });
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
    // v2 remove unused code

    // v2 clean up
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.listenTo(this.model, 'change:currentVideo', this.renderMainVideo);
  },

  newSearch: function () {
    var inputTopic = this.$('.topic').val();

    // v2 fix what is set
    this.model.updateUrl(inputTopic);
  },

  renderVideo: function (model) {
    var videoView = new VideoView({ model: model });

    this.$('.five-display').append(videoView.render().el);
  },

  renderVideos: function () {
    // v2 added .empty() to not keep appending 5 videos on top every time there's a reset 
    this.$('.five-display').empty();

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

    // v2 changed append to html
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

