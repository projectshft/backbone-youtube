var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videosCollection').fetch({ reset: true });


