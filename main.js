var auth = function() {
  key = "AIzaSyCRsUODheI75aQzkkYxtCWzaYxEOjrP-AY";

  return {
    key: key
  }
}


var appModel = new AppModel();
var appView = new AppView({model:appModel});

var query = 'dogs';

var defaultSearch = true;
appView.startFetch();
