/* Our application will have one model that will return a new VideosCollection and
   have a current_video attribute  */
var appModel = new AppModel();

// This view will emcompass the entire page and the appModel will belong to this view
var appView = new AppView({ model: appModel });

/* This will get the video's collection (with its default url) and call the youtube
   api on page load  */
appModel.get('videosCollection').fetch({ reset: true }).catch(function(error) {
  console.log(error.status.toString() + ' ' + error.statusText);
});


