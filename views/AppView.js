var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'displayVideo'
  },

  initialize: function () {
   
   },

  displayVideo: function () {
   console.log('click');
  }
});




   

