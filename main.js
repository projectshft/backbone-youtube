var appModel = new AppModel();

var appView = new AppView({ model: appModel });

// runs with the default upon first page load
appModel.updateVideosCollection();
