var mainVideoView = Backbone.View.extend({
  tagname: "main-display",

  template: Handlebars.compile($("#main-display-template")),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
