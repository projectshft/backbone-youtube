var VideoView = Backbone.View.extend({
  el: '.player-div',

  template: Handlebars.compile($('#iframe').html()),

  // events: {
  //
  // },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    // this.model.on('add change', this.onChange, this);
  },

  onChange: function () {
    console.log('video view says: added or changed video model!');
  },

  render: function () {
    console.log('invoked videoView render');
    var $playerDiv = $('.player-div');
    //append to player-div
    // $playerDiv.append(this.template().el);
    this.$el.html(this.template(this.model));

    return this;
  }
});
