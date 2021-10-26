var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video': 'searchVideo',
  },

  searchVideo : function () {
    console.log('test');
  }
});