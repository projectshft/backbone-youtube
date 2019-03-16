var appModel = new AppModel();

var appView = newAppView({ mode: appModel });

appModel.get('videos').fetch({ reset: true });
