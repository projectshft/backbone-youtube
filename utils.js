/////////////////
// COLLECTIONS //
/////////////////

/////////////////
//    MODELS   //
/////////////////

/////////////////
//    VIEWS    //
/////////////////

// APPVIEW //
var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'alertUser'
  },

  alertUser: function () {
    alert("You clicked search!")
  }

})