//create a new instance of the AppModel
var appModel = new AppModel();

//create a new instance of the AppView with a key of model whose value is the instance of appModel we created above.
var appView = new AppView({ model: appModel })
