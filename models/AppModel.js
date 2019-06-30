var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null,

      search: 'what'
    }
  },

  search: function () {
    this.set({search: $('#search-input').val()});
    console.log(this.get('search'));
  }

});
