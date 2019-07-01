var onErrorHandler = function (collection, response, options) {
  console.log(response.responseText);
  alert('That\'s an error folks! \nPlease check the API fetch function parameters.');
};

var appModel = new AppModel();

var appView = new AppView({
  model: appModel
});
appModel.get('videos').fetch({
  reset: true,
  error: onErrorHandler
});