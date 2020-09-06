console.log('inVideoThumbnailView');

var VideoThumbnailView = Backbone.View.extend({
  el: '#thumbnail-video-container',
  className: '.thumbnail',


  events: {
    'click img': 'changeVideo',
  },

  render: function (thumbnailsArray) {
    console.log('inthumbnailsview render');
    console.log(thumbnailsArray);
    var source = '';
    console.log(source);
    console.log('logging source');
    var template = '';
    var thumbnailHTML = '';

    source = $('#video-thumbnail-template').html();
    console.log(source);
    console.log('logging source');

    template = Handlebars.compile(source);
    for (var i = 0; i < thumbnailsArray.length; i++) {
      console.log(i);
      console.log(source);
      console.log(thumbnailsArray[i]);
      console.log(thumbnailHTML);

      thumbnailHTML = template(thumbnailsArray[i]);
      $('.thumbnail-video-container').append(thumbnailHTML);
    }
  },

  changeVideo: function (e) {
    console.log('clicked!');
    var clickedVideoThumbnail = $(e.currentTarget)[0].currentSrc;
    appModel.get('videosCollection').showNewVideo(clickedVideoThumbnail);
  },
});

console.log('leaving VideoThumbnailView');
