
// The main thing I've gotten stuck on is that I'm not sure how (or where) to connect the model with the collection so that the collection updates when the model updates. Also, unsure about how/where to plug in the search query into the URL.

// MODELS & COLLECTIONS

// model for all video data
var VideoModel = Backbone.Model.extend({
  defaults: {
    videoId: '',
    title: '',
    description: '',
    thumbnail: '',
    currentlyPlaying: false
  },

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + $('#video-search').val().replace(' ', '-') + '&type=video&videoEmbeddable=true&key=AIzaSyA4DBa5TF_PnRTeye0oJXyhMy_jkEF3KtI',

  parse: function (response) {
    var videoArray = response.items;

    for (i=0; i<videoArray.length; i++) {
        console.log({
          videoId: videoArray[i].id.videoId,
          title: videoArray[i].snippet.title,
          description: videoArray[i].snippet.description,
          thumbnail: videoArray[i].snippet.thumbnails.default.url
        });
    }
  }
});

// holds data from the video search results

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  initialize: function () {
    $('.search').on('click', function (model) {
      videoModel.fetch()
    });
  }
});

//overall model for the entire page/app
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection()
    }
  }
});

var appModel = new AppModel();
var videoModel = new VideoModel();

// VIEWS

// view for main video that is currently playing
var MainVideoView = Backbone.View.extend({
  el: $('.app-container'),

  template: Handlebars.compile($('.main-video').html()),

  events: {
    'click .search': 'updateMainVideo',
    'click .video-previews': 'handleVideoClick'
  },

  updateMainVideo: function () {
    // updates the main/currently playing video
  },

  handleVideoClick: function () {
    // changes the clicked video to the main video
  }

  renderMainVideo: function (model) {
    var mainVideoView = new MainVideoView({ model: model });

    this.$('.main-video').append(mainVideoView.render().el);
  }
  
});

// View of listings w/thumbnails for the 5 video search results
var VideoListingView = Backbone.View.extend({
  className: 'video-listing',

  template: Handlebars.compile($('.video-listing').html()),

  events: {
    'click .search': 'updateVideoListing',
  },

  updateVideoListing: function () {
    // updates listing of thumbnails when search button is clicked
  }

  renderListing: function (model) {
    var videoListingView = new VideoListingView({ model: model });

    this.$('.video-listing').append(videoListingView.render().el);
  }

});

var mainVideoView = new MainVideoView({ model: videoModel });
var videoListingView = new VideoListingView({ model: videoModel })