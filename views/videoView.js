var VideoView = Backbone.View.extend({
  el: '.player-div',

  template: Handlebars.compile($('#iframe').html()),

  render: function () {
    console.log('invoked videoView render');
    this.$el.html(this.template(this.model));
    return this;
  }
});
