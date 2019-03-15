// URL: https://www.googleapis.com/youtube/v3
// API KEY: AIzaSyD79hskr75Fwx5ZLAWOAEe8o2NNOgaS3uM

// function googleApiClientReady() {
//   gapi.client.setApiKey('AIzaSyD79hskr75Fwx5ZLAWOAEe8o2NNOgaS3uM');
//   gapi.client.load('youtube', 'v3', function () {
//     searchA();
//   });
// }

// function searchA() {
//   var q = 'pink floyd';
//   var request = gapi.client.youtube.search.list({
//     part: 'snippet',
//     q: query
//   });
//   request.execute(function (response) {
//     console.log(response.result);

//   });
// }

var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch();







