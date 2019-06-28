var AppView = Backbone.View.extend({

    el: $('body'),
  
    events: {
      'click .search-videos': 'createVideos'
    },

    initialize: function () {
        this.$searchInput = this.$('#search-input');
        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    }, 

    renderPage: function () {
        console.log("render page"); 
    }, 

    createVideos: function () {
        var query = this.$searchInput.val(); 
        console.log(query);
        this.$searchInput.val(''); 
    }
});