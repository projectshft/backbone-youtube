var CurrentVideoView = Backbone.View.extend({
  className: 'row p-1 thumbnail',

  events: {
    //listen for clicks on thumbnail. when clicked, set mainVideo to true. find previous mainVideo and set to false.
    'click': 'changeMainVideo'
  },

  template: Handlebars.compile($('#thumbnail-template').html()),

  initialize: function() {
    //if mainVideo attribute changes, show or hide thumbnail
    this.listenTo(this.model, 'change:mainVideo', this.toggleHide)
    //if model is removed, remove view
    this.listenTo(this.model, 'remove', this.removeVideoView)
  },

  removeVideoView: function() {
    this.remove();
  },
