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

    // everytime a search is made I will need to render
    

  },

  searchVideo: function () {
    // console.log('test');
    // this.model.get('VideoCollection').addVideo //I don't think I need this?
    // console.log(this.$mainSearch.val())//tests that the search input and button are connected
    var playingVid = this.$mainSearch.val()
    this.model.set('currentVid', playingVid);//sets the models currentVid attribute with the user input

    console.log(this.model.get('currentVid'))//tests that the model is being set with the input val
  },


  renderSearch: function () {

  },

});




//Model for individual videos
var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
    videoId: '',
    title: '',
    description: '',
    thumbnails: '',
    }
  }
});

//collection of video models
var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=AIzaSyCeEoGSG_koWvcWUt0YzVNqz36gg559X9M',
  model: VideoModel,

  // addVideo: function (videoId,title,description,thumbnails) {
  //   this.add({
  //     videoId: videoId,
  //     title: title,
  //     description: description,
  //     thumbnails: thumbnails
  //   });
  // },


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


//view for each video
var VideoView = Backbone.View.extend({

});

var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var videos = new VideoCollection();
videos.on('add', function (video) { console.log(video.toJSON()); });
videos.fetch();
