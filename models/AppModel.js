var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      current_video: null,

      current_query: null
    }
  },

  changeCurrentQuery: function (query){
    this.set('current_query', query);
    this.get('videos').newSearch(query);
  }
});