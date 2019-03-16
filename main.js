var appModel = new AppModel();

var appView = newAppview({ mode: appModel });

appModel.get('videos').fetch({ reset: true });
