var appModel = new AppModel();

var appView = new AppView({ model: appModel });
// fetch videos as soon as page loads
appModel.get('videos').fetch({ reset: true });
