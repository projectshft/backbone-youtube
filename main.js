let appModel = new AppModel();

let appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });

