var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var videoModel = new VideoModel
// console.log("new video model created by main");
var videoView = new VideoView({ model: videoModel });
// console.log("new video view created by main");
var videosCollection = new VideosCollection();
// console.log("initialized a new collection");
