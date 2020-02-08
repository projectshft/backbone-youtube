//PlayerView is called by AppView
//Once upon initialize, again when a new search is made
//and whenever the user clicks a video in the sidebar
//Uses a handlebar template to embed a playable youtube video on the page
var PlayerView = Backbone.View.extend({
  className: "video-player",

  template: Handlebars.compile($("#video-player-template").html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
