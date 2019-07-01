// Create instances of AppModel and AppView.
var appModel = new AppModel();
var appView = new AppView({ model: appModel });

// Perform fetch on video collection to get and display default search results. 
appModel.get('videos').fetch({ reset: true });
