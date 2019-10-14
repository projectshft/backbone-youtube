var appModel = new AppModel();

var appView = new AppView({ model: appModel });

//restore previous search or load one by default if none
var savedSearch = localStorage.getItem('searchTerm');
appModel.set('searchTerm', savedSearch ? savedSearch : 'funny videos');