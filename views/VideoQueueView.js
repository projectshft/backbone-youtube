var VideoQueueView = Backbone.View.extend({
  el: $('.video-queue-list'),

  template: Handlebars.compile($('#video-queue-template').html()),

  events: {
    'click .queue': 'changeCurrentVideo',
  },


  //this function takes the current_video_que of the appmodel and appends each video to the video queu on the right of the screen
  renderQueue: function() {
    $('.video-queue-list').empty()

    var boundThis = this;

    appModel.get('current_video_queue').forEach(function(video) { $('.video-queue-list').append(boundThis.template(video.attributes))
  });

    $('.queue').click(function() {
      let clickedQueueVideo = $(this).attr('id');
      let newCurrentVideo = appModel.get('current_video_queue').find(function(video) {
        return video.id === clickedQueueVideo});

        appModel.set({current_video: newCurrentVideo.attributes});
    })
  }

})
