var VideoPlayView = Backbone.View.extend({
  el: $('body'),

  template: Handlebars.compile($('#video-player-template').html()),

  //this fucntion uses handle bars to remove from the dom the current video playing, and replace it with the new current video
  renderPlayer: function() {

    $('.video-now-player').empty()
    $('.video-now-player').append(this.template( appModel.get('current_video')))

  }


})
