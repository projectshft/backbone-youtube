
//the Main Video view including rendering Handlebars template
var MainVideoView = Backbone.View.extend({
  className: 'main-video',

  template: Handlebars.compile($('#main-video-template').html()),


  render: function () {

    this.$el.html(this.template(this.model.toJSON()));

  return this;
}
});
