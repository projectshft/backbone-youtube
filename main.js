const appModel = new AppModel();

const appView = new AppView({model: appModel});

const videoModel = new VideoModel();

const mainVideoView = new MainVideoView();

// appModel.get('videos').fetch({reset: true})
// .done(function(res) {console.log(res)})
// .fail(function() {console.log('fetch failed')})

appView.listenTo(appModel.get('videos'), 'change', appView.submitMainVideoHandler())