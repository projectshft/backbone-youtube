const appModel = new AppModel();


const appView = new AppView({
  model: appModel
});

appModel.get('videos').fetch();