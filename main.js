var appModel = new AppModel();

var appView = new AppView({ model: appModel});

//appModel.get('videos').fetch({ reset: true });  //Is this needed? not populating on initialization