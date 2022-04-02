let appModel = new AppModel();

let appView = new AppView({model: appModel});

appModel.get('videos').fetch({reset: true});
appModel.set('selectedVideo', appModel.get('videos').models[0]);