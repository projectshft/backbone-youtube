var PlayerView = Backbone.View.extend({
  template: Handlebars.compile($('#big-video-template').html()),
  
  render: function () {
    console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));
    
    return this;
  }
})