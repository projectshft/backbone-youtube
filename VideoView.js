var VideoView = Backbone.View.extend({
  className: 'video',

  // This will create a handlebars template function for the list of videos
  videoListTemplate: Handlebars.compile($('#video-list-template').html()),

  // This will create a handlebars template function for the current(main) video
  currentVideoTemplate: Handlebars.compile($('#current-video-template').html()),


  /* This will repeatedly be called from appView when rendering the list of videos.
     The html of the view will be 'filled in' by the properties of the app model (title,
     thumbnail and id)  */
  render: function () {
    this.$el.html(this.videoListTemplate(this.model.toJSON()));

    return this;
  }, 

  /* This will be called from appView when rendering the current video on the page.
     The html of the view will be 'filled in' by the properties of the app model (title,
     description, and videoURL)  */
  renderCurrent: function () {
    this.$el.html(this.currentVideoTemplate(this.model.toJSON()));

    return this;
  }

})










