var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appView.get("videos").fetch({ reset: true });
