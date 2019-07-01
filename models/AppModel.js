var AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      vids: new VidCollection(),
      main_vid: null,
      // set default search to show when page loads
      searchQuery: 'lacroix reviews'
    };
  },

});
