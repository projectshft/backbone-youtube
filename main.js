var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var video = new YoutubeCollection();
video.on('add', function (i) { console.log(i.toJSON()); });
video.fetch();