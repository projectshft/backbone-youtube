var VideoView = Backbone.View.extend({
  className: 'video',

  videoListTemplate: Handlebars.compile($('#video-list-template').html()),
  currentVideoTemplate: Handlebars.compile($('#current-video-template').html()),


  //this will repeatedly be called from appView when rendering the list of videos
  render: function () {
    this.$el.html(this.videoListTemplate(this.model.toJSON()));


    return this;
  }, 

  //this will be called from appView when rendering the current video on the page
  renderCurrent: function () {
    this.$el.html(this.currentVideoTemplate(this.model.toJSON()));

    return this;
  }

})










