console.log('inVideoThumbnailView');

var VideoThumbnailView = Backbone.View.extend({
  el: '.thumbnail-video-container',
  class: '.thumbnail',

  // template: Handlebars.compile($('#video-thumbnail-template').html()),

  events: {
    'click img': 'changeVideo',
  },

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

  changeVideo: function (e) {
    console.log('clicked thumbnail!');
    var clickedVideoThumbnail = $(e.currentTarget)[0].currentSrc;
    console.log(clickedVideoThumbnail);
    // this.model.showNewVideo(clickedVideoId);
  },
});
console.log('leaving VideoThumbnailView');
