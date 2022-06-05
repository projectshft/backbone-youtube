const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    const searchBarVal = $('#search-bar').val();
    console.log(searchBarVal);
  }


})