//Main view where videos are displayed and searched
//A user should be able to search something in the
//search bar, and get a list of videos back, with one showing up in the main screen.
var AppView = Backbone.View.extend({
  el: $('body'),

  events: {

    'click .thumbnail': 'viewVid',//when a user clicks the side thumbnail of the video they want to watch, viewVid function is fired
    'click .btn': 'setSearch'//when a user inputs a serach and hits search the setSearch function is fired

  },

  initialize: function () {


    this.$mainSearch = this.$('#main-search').val();
    this.$videoList = this.$('.video-list');


    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);//renders all the videos

    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);//listen to changes in videos added

    this.listenTo(this.model, 'change:search', this.renderSearch);//listens to changes in search term

    this.listenTo(this.model, 'change:search', this.setMain);

    // this.listenTo(this.model, 'change:search', this.clearSearch);
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);

    this.renderVideos();
  },

  setSearch: function () {
    // sets the main search and alerts if nothing is entered
    this.$mainSearch = this.$('#main-search').val();

    if (this.$mainSearch){
      this.model.set('search', this.$mainSearch)
    } else {
      alert('Please input a search value')
    }
  },

  renderSearch: function () {
    // console.log('render test');
    this.$videoList.empty(); //empties the div for each new search
    var allVids = this.model.get('videos'); //points to the video collection

    var search = this.model.get('search');//points to search term

    // sets the website that will be called with the correct search data and attaces it to video collection
    var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+search+'&key=AIzaSyDp1E_LCUqIhb7qNApE8R6NToPSrQ1HOEw';
    allVids.url = searchUrl;

    allVids.fetch({reset: true});

    console.log(allVids.at(0))

  },
  // points to video in a collection that the user picks and makes it the main vid in AppModel
  viewVid: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.showMain(clickedVideoId);
  },

  // setMain: function (){
  //   var allVids = this.model.get('videos');
  //   // this.model.set('current_video', allVids.first())
  //   console.log(allVids.first())
  // },

// renders videos based off of the video model and appends them to the video list (now the collection)
  renderVideo: function (video) {
    var allVids = this.model.get('videos');
    // allVids.reset()

    var videoView = new VideoView({ model: video });
    this.$videoList.append(videoView.render().el);


  },

//renders each video in renderVideo function
  renderVideos: function () {
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
    // selects the first video from the collection as the default main video
    var allVids = this.model.get('videos');
    this.model.set('current_video', allVids.first())
    console.log(allVids.first())

  },

//takes the video from the collection that the use clicks and appends it to the main vidoe view
  renderMainVideo: function () {
    if (this.mainVideo) {
      this.mainVideo.remove();
    }

    this.mainVideo = new MainVideoView({ model: this.model.get('current_video')});

    this.$('.main-video').append(this.mainVideo.render().el);
  },

});
