var VideoView = Backbone.View.extend({
  template: Handlebars.compile($('#video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}) 

var VideoListView = Backbone.View.extend({
  template: Handlebars.compile($('#list-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}) 
//staging comment