var ThumbnailView = Backbone.View.extend({
  template: Handlebars.compile($('#thumbnail-template').html()),
  
  events: {
    'click .thumbnail-container': 'changeHandler'
  },

  initialize() {
    this.listenTo(this.model, 'change:mainPlayer', this.toggleDisplay);
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    if (this.model.get('mainPlayer')) {
      this.$el.addClass('d-none');
    }
    return this;
  },

  changeHandler(e) {
    var newCurrentVideoId = $(e.target).parent().data('id');
    this.model.toggleMainDisplay(newCurrentVideoId);
  },

  toggleDisplay() {
    this.$el.toggleClass('d-none');
    }
});