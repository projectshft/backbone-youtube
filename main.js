const appModel = new AppModel();

const appView = new AppView({model: appModel});

const videoModel = new VideoModel();

const mainVideoView = new MainVideoView();

appModel.get('videos').fetch({reset: true})