const ytAPI = `AIzaSyDHgux6pyvNhGIGufPIEF5E-qePUfMdKqo`;

const app = new App();
// Initialize app with a videos
app.get('videos').fetchVideos(app.get('query'));
app.set('current_video', app.get('videos').models[0]);

const appView = new AppView({model: app});