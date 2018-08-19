//Create AppView - listen for clicks to submit button (or upon hitting enter)

var AppView = Backbone.View.extend({

  events: {
      'keyup #search': 'fetchSearch',
      'click .search-button' : 'fetchSearch'
    },


});
