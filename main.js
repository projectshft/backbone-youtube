//Initializes the models and views
var appModel = new AppModel();

var ENTER_KEY = 13;
var ESC_KEY = 27;
var mykey = config.API_KEY;

var appView = new AppView({model: appModel});
//Setting an initial search so the page is not blank
appView.model.get('videos').setURL('pokemon')
appView.model.get('videos').fetch({reset:true})
