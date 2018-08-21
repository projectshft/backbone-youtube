var VideoView = Backbone.View.extend ({
  id: 'video-view',

  template: Handlebars.compile($('#video-template').html()),

  initialize: function() {
    console.log('video view initialized')
    this.listenTo(this.model, 'change', this.render);
 },

 render: function() {
   this.$el.html(this.template(this.model));
   return this;
 }

})
videoView = new VideoView();
