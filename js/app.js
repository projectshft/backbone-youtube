var appModel = new AppModel();

var appView = new AppView({model: appModel})

appView.model.set("searchTerm", "dogs")


console.log("app.js")
