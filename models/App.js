const App = Backbone.Model.extend({
  defaults: () => ({videos: new Videos(), current_video: null, query: 'puppies'}),

  initialize() {
    this.get('videos').fetchVideos(this.get('query')); // Initialize app with videos
  }
});