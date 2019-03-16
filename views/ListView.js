let ListView = Backbone.View.extend({
  initialize: function() {
    // append <ul> to ListView <div> (this.render(); )
  },
  render: function() {},
  template: Handlebars.compile($('#list-template').html())
});
