const App = Backbone.Model.extend({
  defaults: () => ({videos: new Videos(), current_video: null, query: 'puppies'})
});