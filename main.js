// URL: https://www.googleapis.com/youtube/v3
// API KEY: AIzaSyD79hskr75Fwx5ZLAWOAEe8o2NNOgaS3uM

var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });







