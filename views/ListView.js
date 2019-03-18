/**********************************************
 *  Render video list
 *********************************************/

let ListView = Backbone.View.extend({
  className: 'video', // ???

  template: Handlebars.compile($('#list-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

// Apply click event handler when user selects a video in the list. Apply in AppView.
