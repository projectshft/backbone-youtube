var VideoModel = Backbone.Model.extend({
  //below are the necessary components needed for each video
  defaults: function() {
    return {
      title: '',
      description: '',
      thumbnail: '',
      videoId: '',
    }
  }
});



  // title: data.items[i].snippit.title,
  // desc: data.items[i].snippit.description,
  // thumbnail: data.items[i].snippit.thumbnails.default.url,
  // video: data.items[i].id.videoId,
