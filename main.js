const AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection()
    }
  }
});

const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchForVideos'
  },

  initialize: function () {
    
  },

  searchForVideos: function () {
    console.log('clicked search for videos!!!!')
  }
});





const VideoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    thumbnail_url: '',
    videoId: ''
  }
});

const VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  search: 'news',
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.search}&type=video&videoEmbeddable=true&key=AIzaSyDulPdMaK8Q1sFl0KGnuI56grpQdEjH46M`,

  parse: function (video) {
    const title = video
  };
});


const VideoView = Backbone.View.extend({

});

const appModel = new AppModel();
const appView = new AppView({model: appModel});