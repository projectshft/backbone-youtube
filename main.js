var appModel = new AppModel();

var appView = new AppView ({model: appModel});

//default video when page loads up
appModel.get('videos').fetchVideos('puppies');
