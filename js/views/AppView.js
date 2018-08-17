//js/views/AppView

var AppView = Backbone.View.extend({
  el: $('body'),

//event --> when the search button is clicked --> video list is created
  events: {
    'click .search-btn': 'createVideosList',
    'click .search-btn': alert('search button was clicked'),
  },

  createVideosList : function(){

  }

});
