var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({
  reset: true,
    success: (function() {
      alert('Success! Enjoy the videos :)');
    }),
    error: (function(e) {
      alert('Error. Unable to complete request: ' + e);
    })
  });
