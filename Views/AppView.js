// Initial Commit Placeholder //

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'updateQuery',
    'click .card': 'updateCurrentVideo'
  },
