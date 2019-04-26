/**********************************************
 *  Render showcase "feature" video
 *********************************************/
/**********************************************
 *  Render feature youtube player
 * PROBLEMS WITH THIS!!! IT WAS WORKING EARLIER WITH RESPONSIVE DESIGN
 *********************************************/
let FeaturePlayerView = Backbone.View.extend({
  className: 'videoPlayer',

  el: $('.nowPlaying'),
  // el: $('.feature-video-player'),

  template: Handlebars.compile($('#feature-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
_;
