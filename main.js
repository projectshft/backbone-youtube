var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var savedSearch = localStorage.getItem('searchTerm');

appModel.set('searchTerm', savedSearch ? savedSearch : 'funny videos');