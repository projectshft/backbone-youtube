var AppModel = Backbone.Model.extend({
  defaults() {
    return {
      videos: new VideosCollection(),

      current_query: null
    }
  },

  changeCurrentQuery(query){
    this.set('current_query', query);
    this.get('videos').newSearch(query);
  }
});