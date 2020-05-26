var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });












// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 5});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }
