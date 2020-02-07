// var youtubeApiKey = 'AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE'
// var youTubeClientID = '160915322620-50uq79ssrhknt5p492uqgd5q7p1m3136.apps.googleusercontent.com'

//
// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
//
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }

var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });
