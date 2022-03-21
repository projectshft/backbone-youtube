var appModel = new AppModel();

appModel.get('videos').fetch({ reset: true });

var appView = new AppView({ model: appModel });