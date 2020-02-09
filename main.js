//creates an appModel, appVeiw, and fetches the first API
var appModel = new AppModel();

var appView = new AppView({ model: appModel });

//the initial fetch - should I move this into my collection?

appModel.get('videos').fetch({ reset: true });
