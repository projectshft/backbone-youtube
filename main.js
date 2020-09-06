//setup HTML
//setup CSS

// create model for videos
//create collection for video models
    //use parse to only return desired attributes
//create appview
//create Main video view
//create side video view


var appModel = new AppModel();

var appView = new AppView({ model: appModel});

appModel.get('videos').fetch({ reset: true });