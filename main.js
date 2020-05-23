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
    this.listenTo(this.model, 'change:currentVid', this.addSearch);

  },

  searchVideo: function () {
    // console.log('test');
    // this.model.get('VideoCollection').addVideo //I don't think I need this?
    // console.log(this.$mainSearch.val())//tests that the search input and button are connected
    var playingVid = this.$mainSearch.val()
    this.model.set('currentVid', playingVid);//sets the models currentVid attribute with the user input

    console.log(this.model.get('currentVid'))//tests that the model is being set with the input val
  },


  addSearch: function (videoModel) {
    // console.log('test')//test that function is connected to change in model
    var view = new VideoView ({model: videoModel});

    this.$videoList.append(view.render().el)
    console.log('is this working')
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
  // url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=AIzaSyCeEoGSG_koWvcWUt0YzVNqz36gg559X9M',
  model: VideoModel,


  // parse: function (response) {
  //     return response.items.map(function (items) {
  //       return {
  //         videoId: items.id.videoId,
  //         title: items.snippet.title,
  //         description: items.snippet.description,
  //         thumbnails: items.snippet.thumbnails.default.url
  //       }
  //     });
  //   },

    // A function that will change the search item

});


//adds a video view and appends it to main video section
var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});



var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var videos = new VideoCollection();
videos.on('add', function (video) { console.log(video.toJSON()); });
// videos.fetch();
