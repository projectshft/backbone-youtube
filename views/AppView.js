//create appView
var AppView = Backbone.View.extend({
//attach el to div element
  el: $('body'),

//create backbone events
  events:{
    'click .search': 'searchVideos',
    'click .enter-playlist': 'createPlaylist',
    'click #open-history': 'displayHistory',
    'click #open-playlists': 'displayPlaylists',
    'click .create-playlist': 'enterPlaylistName',
    'click .cancel-create-playlist': 'enterPlaylistName',
    'click .toggle-right-nav':'toggleDisplayVideoList'

  },

//initialize variables and listenTos
  initialize: function(){
    let thisModel = this.model;

    $('#nav-right').on('scroll', function() {
      if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        if(thisModel.get('maxResults')<50)
        thisModel.set({
          maxResults: thisModel.get('maxResults') + 5
        })
      }
    })


    this.$searchedVideo = this.$('.searched-video');

    this.listenTo(this.model.get('history'), 'add', this.renderHistoryView);

    this.listenTo(this.model, 'change:searchQuery', this._renderVideos);

    this.listenTo(this.model, 'change:maxResults', this._renderVideos);

    this.listenTo(this.model.get('playlists'), 'add', this._renderPlaylistLists);

    this.listenTo(this.model.get('playlists').models, 'add', this._renderPlaylistLists);
  },

  //toggles element displays to hide input, cancel icon, and show create playlist icon. *FIX THIS* this function should be separated into two functions. One that toggles display and one that creates the model.
  //creates a new empty playlist with a playlistName attribute and PlaylistCollection
  createPlaylist: function(){
    $('.playlist-name-input').toggleClass('hidden')
    $('.cancel-create-playlist').toggleClass('hidden')
    $('.create-playlist').toggleClass("hidden");

    this.model.get('playlists').add({
      playlistName: $('#playlist-name').val(),
      playlist: new VideoCollections(),
    },{ wait: true })
    $('#playlist-name').val('')
    savePlaylistsToLocalStorage();
  },

  //creates a new PlaylistView that is tied to the model recieved from _renderPlaylistLists and then renders that view
  _renderPlaylistList:function(m){

    var playlistView = new PlaylistView({model:m})
    playlistView.render()
    $('#playlists').prepend(playlistView.render().el);

  },

    //change in PlaylistCollection is listened for. uses .each() to execute _renderPlaylistList for each videoModel in the PlaylistCollection
  _renderPlaylistLists:function(){
    $('#playlists').empty();
    this.model.get('playlists').each(function (m) {
      this._renderPlaylistList(m);
    }, this);
  },

  /*only fired from main.js to load playlists from localStorage*/
  _updatePlaylists: function(){

    this.model.get('playlists').models.forEach(function (video, index){
      let updatingElement = playlistsArray[index].playlist
      let playlist = video.attributes.playlist
      updatingElement.forEach(function(item, index){

        playlist.add({
          title: updatingElement[index].title,
          videoId: updatingElement[index].videoId,
          thumbnail: updatingElement[index].thumbnail, }) })
    })
  },

  //called from another function to update currentVideoView
  _renderCurrentVideo:function(video){
    $('.searched-video').empty();
    let attributes = video.toJSON()
    //updates current_video attribute in appModel
    this.model.get('current_video').title = attributes.title
    this.model.get('current_video').videoId = attributes.videoId
    this.model.get('current_video').thumbnail = attributes.thumbnail

    //new currentVideoView and render it
    var currentVideoView = new CurrentVideoView({model:video})

    this.$searchedVideo.append(currentVideoView.render().el);

    //when currentVideo is rendered, store it in the history. This is a problem because a view is updating a model. I need to create a listenTo event in initialize.
    this.rememberHistory(video);
  },

  //called from another function to update relatedVideosView
  _renderRelatedVideos:function(videos){

    var relatedVideosView = new RelatedVideosView({model:videos})

    $('#related-videos').append(relatedVideosView.render().el);
  },

  //whenever searchQuery or maxResults attributes change, re-render videos
  _renderVideos: function(){

    this.model.get('videos').each(function (m, index) {
      //if maxResults equal the default, then don't re-render the current video or already displayed related videos
      if(this.model.get('maxResults')==10){
        if(index==0){
          //renders the current video
          this._renderCurrentVideo(m);
        }
        if (index<this.model.get('maxResults')){

          this._renderRelatedVideos(m);
        }
      }
      //render the videos that are inbetween previous maxResults and new maxResults
      else if (index>=this.model._previousAttributes.maxResults&&index<this.model.get('maxResults')){
        this._renderRelatedVideos(m);
      }
    }, this);
  },

  //fires whenever a search query is made
  searchVideos: function(e){
    //sets max results of related videos.
    this.model.set({maxResults:10})
    e.preventDefault();
    //create api url from searchQuery
    let searchQuery = $('#search-query').val();
    var search = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9u6cfMLyCe3h_UA2zEIJJ5B9jaR1iP9U&part=snippet&format=5&rel=0&fs=0&maxResults='+50+'&type=video&videoLicense=creativeCommon&regionCode=us&q='+searchQuery;

    //if the search query is new... fetch the data
    if (this.model.get('searchQuery')!=searchQuery){
      $('#related-videos').empty();

      this.model.get('videos').url = search;

      this.model.get('videos').fetch({
        success: function () {
          //changes appModel's attribute to trigger a listenTo in initialize
          appModel.set('searchQuery', searchQuery)
      }}, { reset: true });
    }


    $('#search-query').val('');


  },

  //executes from displayHistory function. Which I need to use initialize listenTo instead. this updates removes the all models and re-adds them to keep history up to date. I know there is a better way to do this.
  updateHistory:function(){

    let videoHistory = this.model.get('history')

    videoHistory.remove(videoHistory.models)

    this.model.get('history').parseData.forEach(function (video, index){

      appModel.attributes.history.add({
          videoId: video.videoId,
          title:video.title,
          thumbnail: video.thumbnail,
      })
    })
  },

  //remembers all the videoModels in the history collections and stores in localStorage
  rememberHistory:function(video){
    //video is passed into function. which equals the model being affected, this video is the same video from the function: _renderVideos
    let videoHistory = this.model.get('history')
    //create variable to test to see if that videoModel has already been stored in history
    let found = false;

    //loop checks to see if video is already stored
    for(i=0; i<appModel.get('history').parseData.length;i++){
      let newHistoryId = video.toJSON().videoId
      let alreadyContainsCheck = appModel.get('history').parseData[i].videoId

      if(newHistoryId==alreadyContainsCheck){
        //found = true is video already exists
        found = true;
      }
    }

    if(!found){
      //if video doesn't already exists, push data.toJSON() to parseData arrat in history collections this is where localStorage updates from
      videoHistory.parseData.push(video.toJSON())

      //add this.model to appModels history
      videoHistory.add({
        videoId: video.get('videoId'),
        title:video.get('title'),
        thumbnail: video.get('thumbnail'),
      });
    }
    //removes old history to keep it at a length of 10 videos. It is a bit shoddy.
    if(videoHistory.parseData.length>10){
      videoHistory.parseData.shift();
      //shouldn't update data simultanuously and separately. One update should cause the other to happen.
      videoHistory.remove(videoHistory.at(0));
    }

    saveToLocalStorage();
  },

  //creates a new HistoryView that is tied to the model recieved from renderHistoryView and then renders that view
  renderHistoryVideo: function(m, index){

    let historyView = new HistoryView({ model: m});

    $('#nav-side-list').prepend(historyView.render(index).el);
  },

  //change in history collections is listened for. uses .each() to execute renderHistoryVideo for each videoModel in the history collections
  renderHistoryView: function(){
    $('#nav-side-list').empty();
      this.model.get('history').each(function (m, index) {
      this.renderHistoryVideo(m, index);
    }, this);
  },

  /* The following functions are only supposed to only to toggle which div elements can be seen... */
  //toggles the display:none of videos rendered on right side
  toggleDisplayVideoList:function(){
    $("#nav-right").toggleClass('hidden')
  },

  /* Currently I have displayHistory also causing a rendering to happen. */
  //targets elements to hide playlists and show historyView
  displayHistory: function(){
    $("#nav-pop-out").removeClass("hidden");
    $("#close-pop-out").removeClass("hidden");
    $('.playlist-name-input').addClass('hidden')
    $('.create-playlist').addClass("hidden");
    $('#nav-side-list').empty();
    $('#nav-side-list').removeClass("hidden");
    $('#playlists').addClass('hidden')
    $('.cancel-create-playlist').addClass('hidden')
    $('.side-header').text('HISTORY')
    this.updateHistory();
  },

  //targets elements to hide playlists and show playlistView
  displayPlaylists: function(){
    $("#nav-pop-out").removeClass("hidden");
    $("#close-pop-out").removeClass("hidden");
    $('#nav-side-list').addClass("hidden");
    $('.create-playlist').removeClass("hidden");

    $('#nav-side-list').empty();
    $('#playlists').removeClass('hidden')
    $('.side-header').text('PLAYLISTS')
  },

    //targets elements to show input to type submit name of a new playlist
  enterPlaylistName: function(){
    $('.playlist-name-input').toggleClass('hidden')
    $('.cancel-create-playlist').toggleClass('hidden')
    $('.create-playlist').toggleClass("hidden");
  },

})
