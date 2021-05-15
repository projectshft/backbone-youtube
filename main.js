var searchValue = $('#video-search').val();
$('.search').on('click', function () {
  console.log(searchValue)
});

// MODELS & COLLECTIONS

var VideoModel = Backbone.Model.extend({
  defaults: {
    videoId: '',
    title: '',
    description: '',
    thumbnail: '',
    currentlyPlaying: true
  },

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + this.$('#video-search').val().replace(' ', '-') + '&type=video&videoEmbeddable=true&key=AIzaSyA4DBa5TF_PnRTeye0oJXyhMy_jkEF3KtI',

  parse: function (response) {
    return {
      videoId: response.items.id.videoId,
      title: response.items.snippet.title,
      description: response.items.snippet.description,
      thumbnail: response.items.snippet.thumbnails.default.url
    }
  }
});

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  initialize: function () {
    this.on('add', function (model) {
      model.fetch();
    });
  }
});

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

var MainVideoView = Backbone.View.extend({
  //className: 'main-video',

  events: {
    'click .search': 'handleSearchClick',
    'click .video-previews': 'handleVideoClick'
  },

  handleSearchClick: function () {
    console.log('Clicked search.')
  },
  
  renderMain: function () {

  }
});

// View of each listing for the 5 video search results
var VideoListingView = Backbone.View.extend({
  className: 'video-listing',

  render: function () {

  }
});

var mainVideoView = new MainVideoView({ model: videoModel });
var videoListingView = new VideoListingView({ model: videoModel })