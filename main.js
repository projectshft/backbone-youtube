var appModel = new AppModel();

var appView = new AppView({ model: appModel });

// trying to set the search input as something the videos collection can use (not working)
// var search = appModel.get('search');
//
// var videos = new VideosCollection({search: search});

// should change the url to include search criteria (not working)
// videos.set('url', videos.url(appModel.get('search')));
// console.log(videos.url(appModel.get('search')))

// appModel.get('videos').fetch({ reset: true });
// videos.on('add', function (video) { console.log(video.toJSON()); });
// videos.fetch();
