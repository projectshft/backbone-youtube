
var appModel = new AppModel();

var appView = new AppView({ model: appModel });

// get the collection,  fetch videos, parse items from response, create videoModels
appModel.get('videoList').fetch({ reset: true });


