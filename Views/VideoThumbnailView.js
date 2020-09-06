console.log('inVideoThumbnailView');

var VideoThumbnailView = Backbone.View.extend({
  el: '.thumbnail-video-container',

  // template: Handlebars.compile($('#video-thumbnail-template').html()),

  render: function (thumbnailArray) {
    const source = $('#video-thumbnail-template').html();
    const template = Handlebars.compile(source);
    for (let i = 0; i < thumbnailArray.length; i++) {
      const thumbnailHTML = template(thumbnailArray[i]);
      $('.thumbnail-video-container').append(thumbnailHTML);
      // this.$el.html(this.template(this.model.toJSON()));
      // return this;
    }
  },
});
console.log('leaving VideoThumbnailView');
