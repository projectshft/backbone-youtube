
$("#close-pop-out").on("click", function() {
  $("#close-pop-out").addClass("hidden");
  $("#nav-pop-out").addClass("hidden");
})

var appModel = new AppModel();

var appView = new AppView({
  model: appModel
});




var HISTORY_ID = 'backbone-youtube-history';

var saveToLocalStorage = function () {
localStorage.setItem(HISTORY_ID, JSON.stringify(appModel.get('history').parseData));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(HISTORY_ID) || '[]');
}

appModel.get('history').parseData = getFromLocalStorage()

var PLAYLISTS_ID = 'backbone-youtube-playlists';

var savePlaylistsToLocalStorage = function () {
localStorage.setItem(PLAYLISTS_ID, JSON.stringify(appModel.get('playlists').models));
}

var getPlaylistsFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(PLAYLISTS_ID) || '[]');
}

const playlistsArray = getPlaylistsFromLocalStorage()

playlistsArray.forEach(function(m){

  appModel.get('playlists').add({
    playlistName: m.playlistName,
    playlist: new VideoCollections(),
  },{ wait: true })

})

$( document ).ready(function() {
    appView._updatePlaylists()

    appModel.get('videos').url ='https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9u6cfMLyCe3h_UA2zEIJJ5B9jaR1iP9U&part=snippet&format=5&rel=0&fs=0&maxResults=50&type=video&videoLicense=creativeCommon&regionCode=us&q=freshlyground';

    appModel.get('videos').fetch({
      success: function () {
        appModel.set('searchQuery', 'freshlyground')
    }}, { reset: true });
});
