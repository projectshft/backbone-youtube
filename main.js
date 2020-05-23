var appModel = new AppModel();

var appView = new AppView({ model: appModel});

// appModel.get('videos').fetch({ reset: true });

// manually add "videos"
appModel.get('videos').add({ title: 'Here comes Johnny', description: 'a movie', src: 'https://miro.medium.com/max/256/1*d69DKqFDwBZn_23mizMWcQ.png' });
appModel.get('videos').add({ title: 'Esther Butlier', description: 'a movie', src: 'https://miro.medium.com/max/256/1*d69DKqFDwBZn_23mizMWcQ.png' });
appModel.get('videos').add({ title: 'No Country for Old Men', description: 'a movie', src: 'https://miro.medium.com/max/256/1*d69DKqFDwBZn_23mizMWcQ.png' });
appModel.get('videos').add({ title: 'The Day Sally Walked By', description: 'a movie', src: 'https://miro.medium.com/max/256/1*d69DKqFDwBZn_23mizMWcQ.png' });
