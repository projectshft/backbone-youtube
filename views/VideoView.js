let VideoViewMain = Backbone.View.extend({

  tagName: 'span',
  className: 'video col-med-7',

  template: Handlebars.compile($('#video-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.el.id = this.model.cid; // NOTE THIS LINE
    return this;
  }
  
});

let VideoViewSidebar = Backbone.View.extend({
  tagName: 'span',
  className: 'video-sidebar-click col-med-5',
  template: Handlebars.compile($('#video-template-sidebar').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.el.id = this.model.cid; // NOTE THIS LINE
    return this;
  }

})
