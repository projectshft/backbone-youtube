/* Our application will have one model that will return a new VideosCollection and
   have a current_video attribute  */
var appModel = new AppModel();

// This view will emcompass the entire page and the appModel will belong to this view
var appView = new AppView({ model: appModel });

/* This will call the youtube api on page load (see function in appModel file) */
appModel.callTheAPI();  



