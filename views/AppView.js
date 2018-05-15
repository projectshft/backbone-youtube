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

    this.listenTo(this.model, 'change:searchQuery', this._renderCurrentVideos);

    this.listenTo(this.model, 'change:maxResults', this._renderCurrentVideos);

    this.listenTo(this.model.get('playlists'), 'add', this._renderPlaylistLists);

    this.listenTo(this.model.get('playlists').models, 'add', this._renderPlaylistLists);
  },


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

  _renderPlaylistList:function(m){

    var playlistView = new PlaylistView({model:m})
    playlistView.render()
    $('#playlists').prepend(playlistView.render().el);

  },

  _renderPlaylistLists:function(){
    $('#playlists').empty();
    this.model.get('playlists').each(function (m) {
      this._renderPlaylistList(m);
    }, this);
  },

  updatePlaylists: function(){

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

  _renderCurrentVideo:function(video){
    /*Fix to listen to a change in the current video*/
    $('.searched-video').empty();
    let attributes = video.toJSON()
    this.model.get('current_video').title = attributes.title
    this.model.get('current_video').videoId = attributes.videoId
    this.model.get('current_video').thumbnail = attributes.thumbnail

    var searchedVideoView = new SearchedVideoView({model:video})

    this.$searchedVideo.append(searchedVideoView.render().el);

    this.rememberHistory(video);
  },

  _renderRelatedVideos:function(videos){

    var relatedVideosView = new RelatedVideosView({model:videos})

    $('#related-videos').append(relatedVideosView.render().el);
  },

  _renderCurrentVideos: function(){

    this.model.get('videos').each(function (m, index) {
      if(this.model.get('maxResults')==10){
        if(index==0){
          this._renderCurrentVideo(m);
        }
        if (index<this.model.get('maxResults')){

          this._renderRelatedVideos(m);
        }
      }
      else if(index>=this.model._previousAttributes.maxResults&&index<this.model.get('maxResults')){
        this._renderRelatedVideos(m);
      }
    }, this);
  },

  searchVideos: function(e){

    this.model.set({maxResults:10})
    e.preventDefault();
    let searchQuery = $('#search-query').val();
    var search = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9u6cfMLyCe3h_UA2zEIJJ5B9jaR1iP9U&part=snippet&format=5&rel=0&fs=0&maxResults='+50+'&type=video&videoLicense=creativeCommon&regionCode=us&q='+searchQuery;
    if (this.model.get('searchQuery')!=searchQuery){
      $('#related-videos').empty();

      this.model.get('videos').url = search;

      this.model.get('videos').fetch({
        success: function () {
          appModel.set('searchQuery', searchQuery)
      }}, { reset: true });
    }


    $('#search-query').val('');


  },


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

  rememberHistory:function(video){
    let videoHistory = this.model.get('history')
    let found = false;

    for(i=0; i<appModel.get('history').parseData.length;i++){
      let newHistoryId = video.toJSON().videoId
      let alreadyContainsCheck = appModel.get('history').parseData[i].videoId

      if(newHistoryId==alreadyContainsCheck){
        found = true;
      }
    }
    if(!found){
      videoHistory.parseData.push(video.toJSON())
      videoHistory.add({
        videoId: video.get('videoId'),
        title:video.get('title'),
        thumbnail: video.get('thumbnail'),
      });
    }
    if(videoHistory.parseData.length>10){
      videoHistory.parseData.shift();
      //shouldn't update data simultanuously and separately. One update should cause the other to happen.
      videoHistory.remove(videoHistory.at(0));
    }

    saveToLocalStorage();
  },

  renderHistoryVideo: function(m, index){

    let historyView = new HistoryView({ model: m});

    $('#nav-side-list').prepend(historyView.render(index).el);
  },

  renderHistoryView: function(){
    $('#nav-side-list').empty();
      this.model.get('history').each(function (m, index) {
      this.renderHistoryVideo(m, index);
    }, this);
  },

  toggleDisplayVideoList:function(){
    $("#nav-right").toggleClass('hidden')
  },

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

  displayPlaylists: function(){
    $("#nav-pop-out").removeClass("hidden");
    $("#close-pop-out").removeClass("hidden");
    $('#nav-side-list').addClass("hidden");
    $('.create-playlist').removeClass("hidden");

    $('#nav-side-list').empty();
    $('#playlists').removeClass('hidden')
    $('.side-header').text('PLAYLISTS')
  },

  enterPlaylistName: function(){
    $('.playlist-name-input').toggleClass('hidden')
    $('.cancel-create-playlist').toggleClass('hidden')
    $('.create-playlist').toggleClass("hidden");
  },



})
