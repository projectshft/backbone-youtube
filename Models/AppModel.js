var AppModel = Backbone.Model.extend({
  defaults: function (){
    return {
      videos: new VideoCollection(),
      currentVideo: null,
      // When user loads page, there should be a default search with videos loaded so page is not blank.
      query: 'screaming goats'
    }
  }
})
