var appModel = new AppModel();

var appView = new AppView({ model: appModel});

appModel.get('videos').updateUrl('Dune');
appModel.get('videos').fetch({ reset: true });
//appModel.get('videos').setCurrentVideo(1);
  