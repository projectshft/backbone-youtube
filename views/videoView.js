var VideoView = Backbone.View.extend({
  el: '.player-div',

  template: Handlebars.compile($('#iframe').html()),

  events: {
    'click': 'handleClick'
  },

  initialize: function () {
    // this.listenTo(this.model, 'change', this.render);
    this.model.on('add change', this.updateModel, this);
  },

  onChange: function () {
    console.log('video view says: added or changed video model!');
  },

  handleClick: function () {
    this.model.clicked();
  },

  render: function () {

    console.log('invoked videoView render');
    var $playerDiv = $('.player-div');
    //append to player-div
    // $playerDiv.append(this.template().el);
    this.$el.html(this.template(this.model.id));
    //Remember that the model that is given to a view should represent all the data that a view needs to render itself
    //the URL concatenation needs to happen here so that when the view renders, it's got  a video ID

    return this;
  }
});
