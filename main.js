var appModel = new AppModel();

appModel.get('videos').addVideo('https://www.youtube.com/embed/y881t8ilMyc');


var appView = new AppView({ model: appModel });

