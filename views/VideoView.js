let VideoViewMain = Backbone.View.extend({

  tagName: 'span',
  className: 'video col-med-7',

  template: Handlebars.compile($('#video-template').html()),
  render: function() {
    debugger;
    console.log('VIDEO RENDER...')
    this.$el.html(this.template(this.model.toJSON()));
    this.el.id = this.model.cid; // NOTE THIS LINE
    return this;
  }
  
});

let VideoViewSidebar = Backbone.View.extend({
  tagName: 'span',
  className: 'video-sidbar col-med-5',
  template: Handlebars.compile($('#video-template-sidebar').html()),
  render: function() {
    debugger;
    console.log('VIDEO RENDER SIDEBAR...')
    this.$el.html(this.template(this.model.toJSON()));
    this.el.id = this.model.cid; // NOTE THIS LINE
    return this;
  }

})
