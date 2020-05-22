var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYouTube'
  },

  searchYouTube: function () {
    console.log('test');
  }
});


