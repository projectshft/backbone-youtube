/**********************************************
 *  Render video list
 *********************************************/

const ListView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#list-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
