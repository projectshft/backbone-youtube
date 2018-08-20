//instantiate a new appModel when page loads

var appModel = new AppModel();

//create new appView that passes in the new appModel

var appView = new AppView({
  model: appModel
});
