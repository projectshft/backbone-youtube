var appModel = new AppModel();

var appView = new AppView({model: appModel})

//Set an initial search to display on the webpage
appView.model.set("searchTerm", "凤凰于飞刘欢")
