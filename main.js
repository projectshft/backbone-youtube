var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({
// initial fetch function called when user loads the page, grabs hardcoded set of videos
    reset: true,
// alert user if the server is unable to complete the request
    error: (function() {
      alert('Error. Unable to complete request.');
    })
  });
