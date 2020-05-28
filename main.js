var appModel = new AppModel();

//create new instance of AppView for main web page
var appView = new AppView({ model: appModel });

//initial default search to render when user loads the page
appModel.get('videoList').fetch({ reset: true });

