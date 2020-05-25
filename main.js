//global model containing search criteria, the current video and the video collection
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      search: '',

      currentVid: null,
      // each video will have a hidden handlebars view that toggles on and off depending on what the user selects

      videos: new VideoCollection()
    }
  },



});



//Main view where videos are displayed and searched
//A user should be able to search something in the
//search bar, and get a list of videos back, with one showing up in the main screen.
var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'setSearch',//when the main button is clicked, the searchVideo function is initiated
    'click .view-vid': 'setMainVid'
  },

  initialize: function () {
    this.$mainSearch = this.$('#main-search');//variable for the main search data
    this.$mainVideo = this.$('.main-video'); //variable pointing to where main vid will go
    this.$videoList = this.$('#video-list');//points to video collection
    // everytime a search is made I will need to render
    this.listenTo(this.model.get('video'), 'reset', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model, 'change:search', this.searchVideo);
    this.renderVideos();//ensures that hardcoded vids get loaded
  },

  setSearch: function () {
    // console.log('test');
    // console.log(this.$mainSearch.val())//tests that the search input and button are connected
    var searchVal = this.$mainSearch.val()
    this.model.set('search', searchVal);//sets the models currentVid attribute with the user input

    console.log(this.model.get('search'))//tests that the model is being set with the input val
  },


  renderVideo: function (videoModel) {
    // console.log('test')//test that function is connected to change in model
    // function that appends new video views to the HTML
    var view = new VideoView ({model: videoModel});

    this.$videoList.append(view.render().el)
    console.log('test')
  },


  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
      }, this);
  },

  searchVideo: function () {
    // a function that takes the search term and communicates with the api?
    // var search = this.$('#main-search').val();
    // this.model.get('videos').addVideo; //function that adds videos to the collection after they're populated. needs to go somewhere else
    var videos = new VideoCollection();
    videos.on('add', function (video) { console.log(video.toJSON()); });
    videos.fetch();

    // console.log('this should only fire after a search is made')
  },

  setMainVid: function () {
    console.log('Main vid test')
  }

});




//Model for individual videos
var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
    // search: '',
    videoId: '',
    title: '',
    description: '',
    thumbnails: '',
    main_vid: false,
    }
  },

});

//collection of video models
var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=AIzaSyCcUefoTKieeERVx9xz_8iHpfz_qIQhw-g',

  model: VideoModel,

  // function used to add videos in manually. will remove
  addVideo: function (id, videoId, title, description, thumbnails, search) {
    this.add({
      id: id,
      videoId: videoId,
      title: title,
      description: description,
      thumbnails: thumbnails,
      search: search
    },
    { wait: true}
  );
  },


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


//adds a video view and appends it to main video section
var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  events: {
    'click .thumbnail': 'toggleMainVideo'
  },

  initialize: function () {
    this.listenTo(this.model, 'change:main_vid', this.render);
  },

  toggleMainVideo: function (video) {
    // this.model.set('main_vid', 'true')
    // var mainVid = new MainVidView({ model: video});
    // this.$('.test').append(mainVid.render().el);
    console.log(this.model)

  },

  render: function () {
    // refreshes html conten
    this.$el.html(this.template(this.model.toJSON()));
    // console.log('render test')

    return this;
  },


});

var MainVidView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    this.$el.html(this.template);
    // stopped here

    return this;
  },
});


var appModel = new AppModel();
//
// appModel
//   .get('videos')
//   .add([
//     {
//       id: '1',
//       videoId: 'fBYvHHT8fdE',
//       name: 'Cute Puppies',
//       description: 'Cutest Dogs Thanks For Watching',
//       thumbnails:
//         'https://i.ytimg.com/vi/fBYvHHT8fdE/default.jpg',
//     },
//     {
//       id: '2',
//       videoId: 'wtH-hdOF1uA',
//       name: 'Baby Dogs',
//       description: 'try not to laugh',
//       thumbnails:
//         'https://i.ytimg.com/vi/wtH-hdOF1uA/default.jpg',
//     },
//     {
//       id: '3',
//       videoId: 'BkD2nN5275c',
//       name: 'Funny Pet Animals Videos',
//       description: 'very cute compilation',
//       thumbnails:
//         'https://i.ytimg.com/vi/fBYvHHT8fdE/default.jpg',

  // appModel.get('videos').addVideo("fBYvHHT8fdE", "Cute wowowowowowPuppies", "Cutest Dogs Thanks For Watching", "https://i.ytimg.com/vi/fBYvHHT8fdE/default.jpg", "null");
  // appModel.get('videos').addVideo("wtH-hdOF1uA", "Baby wowowowowoowwoDogs", "try not to laugh", "https://i.ytimg.com/vi/wtH-hdOF1uA/default.jpg", "null");
  // appModel.get('videos').addVideo("BkD2nN5275c", "Funny Pet Animals Videos", "very cute compilation", "https://i.ytimg.com/vi/BkD2nN5275c/default.jpg", "null");

var appView = new AppView({ model: appModel });
appModel.get('videos').fetch({ reset: true });

var videos = new VideoCollection();

videos.on('add', function (video) { console.log(video.toJSON()); });
videos.fetch();
// appModel.get('videos').fetch({reset: true})
