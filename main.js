var appModel = new AppModel();

// appModel.get('videos').addVideo('mLyOj_QD4a4','https://i.ytimg.com/vi/mLyOj_QD4a4/default.jpg', 'Leeroy Jenkins HD 1080p', 'Leeroy Jenkins in HD 1080p ENJOY!');
// appModel.get('videoList').addVideoList('mLyOj_QD4a4','https://i.ytimg.com/vi/mLyOj_QD4a4/default.jpg', 'Leeroy Jenkins HD 1080p', 'Leeroy Jenkins in HD 1080p ENJOY!');
// appModel.get('videoList').addVideoList('mLyOj_QD4a4','https://i.ytimg.com/vi/mLyOj_QD4a4/default.jpg', 'Leeroy Jenkins HD 1080p', 'Leeroy Jenkins in HD 1080p ENJOY!');
// appModel.get('videoList').addVideoList('mLyOj_QD4a4','https://i.ytimg.com/vi/mLyOj_QD4a4/default.jpg', 'Leeroy Jenkins HD 1080p', 'Leeroy Jenkins in HD 1080p ENJOY!');
// appModel.get('videoList').addVideoList('mLyOj_QD4a4','https://i.ytimg.com/vi/mLyOj_QD4a4/default.jpg', 'Leeroy Jenkins HD 1080p', 'Leeroy Jenkins in HD 1080p ENJOY!');
// appModel.get('videoList').addVideoList('mLyOj_QD4a4','https://i.ytimg.com/vi/mLyOj_QD4a4/default.jpg', 'Leeroy Jenkins HD 1080p', 'Leeroy Jenkins in HD 1080p ENJOY!');

//create new instance of AppView for main web page
var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });
appModel.get('videoList').fetch({ reset: true });