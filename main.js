var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.set('searchTerm', 'test');