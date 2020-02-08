var AppView = Backbone.View.extend({
    el: $('body'),
  
    events: {
      'click .search': 'createSearch',
    },
  
    createSearch: function () {
      this.model.get('videos').addVideo(
          this.$()
      )
    }
});