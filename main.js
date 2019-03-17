var appModel = new AppModel();

var appView = new AppView({ model:appModel});

appModel.get('videoList').fetch({ reset: true });
