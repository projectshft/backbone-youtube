var appModel = new AppModel();

var appView = new AppView({ model: appModel });

// runs with the default upon first page load
// comment out this code if you are worried about quota limit
appModel.updateVideosCollection();
