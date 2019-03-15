var appModel = new AppModel();

appModel.get('videos').addVideo('Listen, Linda', 'cZtH6sDUZlQ', "Little Boy Arguing with Mother: Linda, honey, just listen", "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg")
appModel.get('videos').addVideo('Charlie Bit Me', "_OBlgSz8sSM", "Charlie bit my finger - again !", "https://i.ytimg.com/vi/dAqC07wsbOk/default.jpg")

var appView = new AppView({ model: appModel });