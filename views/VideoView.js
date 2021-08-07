var VideoView = Backbone.View.extend({
  templateBig: Handlebars.compile($('#big-video-col-template').html()),
  templateSmall: Handlebars.compile($('#small-video-col-template').html()),
})