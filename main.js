// Check for API Issues

var onErrorHandler = function (collection, response, options) {
    console.log(response.responseText);
    alert('Woah there!  You have an API problem, matey. \nPlease check the API fetch function parameters.');
  };

// Main Backbone framework

  var appModel = new AppModel();

  var appView = new AppView({
    model: appModel
  });
  appModel.get('videos').fetch({
    reset: true,
    error: onErrorHandler
  });
