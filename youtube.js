var appModel = new AppModel();

var appView = new AppView({model: appModel})

appModel.get('video').fetch({reset: true});