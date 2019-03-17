var appModel = new AppModel();

var appView = new AppView({ mode: appModel });

appModel.get('videos').fetch({ reset: true });
