/* Creates the view for each video in the video list via a Handlebars template and then renders 
   that HTML */

const VideoListView = Backbone.View.extend({
  className: 'video-list-entry',
  attributes: function() {
    return {
      'data-id': this.model.id  // Allows for clicking of entire video list box
    };
  },
  
  template: Handlebars.compile($('#video-list-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});