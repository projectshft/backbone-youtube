var appModel = new AppModel();

var appView = new AppView ({ model: appModel });

// Initializng the model
appModel.get('videos').fetch({reset: true });
