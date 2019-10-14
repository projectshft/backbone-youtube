var appModel = new AppModel();

var appView = new AppView({model: appModel});

appModel.get('videos').fetch({ reset: true });

// Api key
// AIzaSyC3YemB3l6du25eOAiAxz1CjaFtCgq1wxw
