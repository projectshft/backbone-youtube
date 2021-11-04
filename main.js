var appModel = new AppModel();

var video = new YoutubeCollection();
video.on('add', function (i) { console.log(i.toJSON()); });
video.fetch();

var appView = new AppView({ model: appModel, collection: video });