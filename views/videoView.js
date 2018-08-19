var VideoView = Backbone.View.extend({
  el: '.player-div',

  template: Handlebars.compile($('#iframe').html()),

  events: {

  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    console.log('invoked videoView render');
    // $playerDiv.append(this.template().$el);
    this.$el.html(this.template(this.model));
    //Remember that the model that is given to a view should represent all the data that a view needs to render itself
    return this;
  }
});
