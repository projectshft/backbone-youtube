var AppView = Backbone.View.extend({

    el: $('body'),
  
    events: {
      'click .search-videos': 'createVideos'
    },

    initialize: function () {
        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    }, 

    renderPage: function () {
        console.log("render page"); 
    }, 

    createVideos: function () {
        console.log("create videos");
    }
});