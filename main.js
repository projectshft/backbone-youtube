//creates an appModel, appVeiw, and fetches the first API
var appModel = new AppModel();

var appView = new AppView({ model: appModel });

//should I delete this because it is in my collection???

appModel.get('videos').fetch({ reset: true });
