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

  initialize: function () {
    $('.search').on('click', function() {
      var searchInput = $('#video-search').val();
      return searchInput
      })
  },

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + searchInput + '&type=video&videoEmbeddable=true&key=AIzaSyA4DBa5TF_PnRTeye0oJXyhMy_jkEF3KtI',

  parse: function (response) {
    var videoArray = response.items;

    for (i=0; i<videoArray.length; i++) {
        console.log ({
          videoId: videoArray[i].id.videoId,
          title: videoArray[i].snippet.title,
          description: videoArray[i].snippet.description,
          thumbnail: videoArray[i].snippet.thumbnails.default.url
        })
      }
    }
});

// holds data about the video search results

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
    'click .search': 'handleSearchClick',
    'click .video-previews': 'handleVideoClick'
  },

  handleSearchClick: function () {
    console.log('MainVideoView clicked search.')


  },
  
});

// View of listings w/thumbnails for the 5 video search results
var VideoListingView = Backbone.View.extend({
  className: 'video-listing',

  render: function () {

  }
});

var mainVideoView = new MainVideoView({ model: videoModel });
var videoListingView = new VideoListingView({ model: videoModel })
