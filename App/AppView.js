var AppView = Backbone.View.extend({
  //already exists on the page, so setting DOM element to body
  el: $('body'),

//needs to listen for user events on the view
  events:{
    //on enter, call search function
    'keypress .search-input': 'searchVideo'
  },

  //when page loaded, do the following things
  initialize: function(){
    //fetch API data with pre-loaded search

    this.model.get('videos').initialSearch;
    //listen for additions to the collection and render page
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
  },
//

// searchVideo, don't allow empty submit

//render video upon change in collection
});
