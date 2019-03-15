/* Creates the view for each video in the video list via a Handlebars template and then renders 
   that HTML */

const VideoListView = Backbone.View.extend({
  className: 'video',
  
  template: Handlebars.compile($('#video-list-template').html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});