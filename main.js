var appModel = new AppModel();
var appView = new AppView({ model: appModel });


var appModel = new AppModel();

appModel.get('videos').addVideo('k6BLFszlsYY', 'Funny Cat Videos to Make You Smile! 2021😸 | YUFUS', 'Hi cat lovers! The best and funniest cat videos ever! Cats are part of our life, we laugh at them so much.Funny cats are so adorable and cute. Just look at all ...', 'https://i.ytimg.com/vi/k6BLFszlsYY/default.jpg');

var appView = new AppView({ model: appModel });

console.log(appModel);
console.log(appView);