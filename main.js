// Project Shift - backbone-youtube app
let appModel = new AppModel()
let appView;

let appViewInit = () => { appView = new AppView({ model: appModel })};

appModel.get('videos').fetch({ reset: true, success: appViewInit });

