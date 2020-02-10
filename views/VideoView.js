var VideoView = Backbone.View.extend({
  className: 'video-list',

  template: Handlebars.compile($('#video-template').html()),
  
  events: {
    'click .suggested-video-container': 'clickedOnVideo'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  clickedOnVideo: function(e){
    //capturing clicked on video to send to appModel
    var selectedVideoId = $(e.target).data("id");

    appModel.changeMainVideoToClickedVideo(selectedVideoId);
  }
});