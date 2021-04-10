var PlayerView = Backbone.View.extend({
  template: Handlebars.compile($('#big-video-template').html()),

  initialize() {
    this.listenTo(this.model, 'change:mainPlayer', this.toggleDisplay);
  },
  
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    if (!this.model.get('mainPlayer')) {
      this.$el.addClass('d-none');
    }
    return this;
  },

  toggleDisplay() {
    this.$el.toggleClass('d-none');
    this.stopMainPlayer();
  },

  stopMainPlayer() {
    //Grabs the src link from the iframe, then, when it is hidden, reassigns it back to the video to stop playback when a new video is clicked

    if(!this.model.get('mainPlayer')){
      var sourceLink = this.$el.find('iframe').attr('src');
      this.$el.find('iframe').attr('src', sourceLink);
    }
  }
})