var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      currentVideo: null,
    };
  },
});

var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      id: '',
      thumbnail: '',
    };
  },
});

var VideosCollection = Backbone.Collection.extend({
  //need a URL attribute that can be updated  // url: 'https://beer-review-api.herokuapp.com/beers',
  defaults: {
    url: '',
    model: VideoModel,
  },

  createUrl: function ($searchInputVal) {
    //plan: use search terms to update collection's url

    console.log('creating URL!');
    var searchTerm = $searchInputVal.trim().split(' ').join('+');
    console.log(searchTerm);
    var newUrl =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      searchTerm +
      '&key=AIzaSyAP_76scBmXPFjlzlMlaFCRsbigHBofhmM';
    return newUrl;
  },

  parse: function (response) {
    console.log(parsing!);
    console.log(response);
  },
});

var newVideos = new VideosCollection({ 'url': newUrl });
newVideos.on('add', function (modelThatsAdded) { console.log(modelThatsAdded.toJSON()); });
newVideos.fetch();



var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter', //create collection of videos
  },

  initialize: function () {},

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function in VideosCollection
    if (event.which === 13) {
      // console.log('confirmed enter key');
      var $searchInputVal = $('#search-input').val();
      this.model.get('videos').createUrl($searchInputVal); //send search parameters here
    }
  },
});

var VideoMainView = Backbone.View.extend({
  // className: 'video-view',
  // template: Handlebars.compile($('#video-main-template').html()),
});

var VideoThumbnailView = Backbone.View.extend({
  // className: 'thumbnail-view',
  // template: Handlebars.compile($('#video-thumbnail-template').html()),
});

var appModel = new AppModel();
var appView = new AppView({ model: appModel });

//https://www.youtube.com/watch?v=NsGK7cUdelM
