console.log('inVideoThumbnailView');

var VideoThumbnailView = Backbone.View.extend({
  el: '#thumbnail-video-container',
  className: '.thumbnail',

  template: Handlebars.compile($('#video-thumbnail-template').html()),

  events: {
    'click img': 'changeVideo',
  },

  render: function () {
    console.log('inthumbnails trying to render')
    this.model = appModel.get('videosCollection');
    console.log(this.model)
    this.$el.html(this.template(this.model));

    console.log(this);
  },

  changeVideo: function (e) {
    console.log('clicked!');
    var clickedVideoThumbnail = $(e.currentTarget)[0].currentSrc;
    appModel.get('videosCollection').showNewVideo(clickedVideoThumbnail);
  },
});

console.log('leaving VideoThumbnailView');
