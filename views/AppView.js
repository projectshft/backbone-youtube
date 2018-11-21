var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'keypress #search-bar': 'createVid'
  },

  createVid: function(e) {
    if (e.which === 13) {
      console.log('Test!');
    }
  }

});
