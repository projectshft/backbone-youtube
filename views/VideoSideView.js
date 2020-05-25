var VideoSideView = Backbone.View.extend({

  template: Handlebars.compile($('#video-side-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
    }


  // events: {
  //   'click .view-video': 'selectVideo'
  // },

  // initialize: function () {
  //   this.listenTo(this.model, 'change:hide_video_in_side_view', this.selectVideo);
  // },

  // selectVideo: function () {
  //   //
  // }

})
