//youTube API Key AIzaSyDSTlxlIl5f7wwXbpkN2Zo9R5wS_1Jb940

//sample API request
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=SEARCH_TERM_HERE&type=video&videoEmbeddable=true&key=YOUR_API_KEY_HERE

var appModel = new AppModel();

var appView = new AppView({model : appModel});

appModel.get('videos').fetch({ reset : true });