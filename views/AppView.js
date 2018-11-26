var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'keypress #search-bar': 'searchVideos',
    'click .list-group-item': 'selectVideo'
  },

  initialize: function () {
    //initial a get request
    this.model.get('videos').getVideos(this.model.get('query'));

    this.listenTo(this.model.get('videos'), 'reset', this.InitialRenderVideos);

    this.listenTo(this.model, 'change:current_video', this.updateRenderVideos);

  },

  searchVideos: function(e) {
    if (e.which === 13) {
      //set a variable to the value of the user's search
      var query = $('#search-bar').val();
        if (!query) {
          //error handling to account for an empty search query
          alert('Please enter a valid video topic to search!');
        } else {
        //set the query attribute to the search information
        this.model.set('query', query)
        this.model.get('videos').getVideos(this.model.get('query'));
      }
      $('#search-bar').val('')
    }
  },

  renderVideo: function (video) {
    var videoView = new VideoView( { model: video } );
    this.$('#additional-vids').append(videoView.render().el);
  },

  renderCurrentVideo: function (video) {
    var currentVideoView = new CurrentVideoView ( { model: video } );
    this.$('#current-video').append(currentVideoView.render().el)
  },

  InitialRenderVideos: function () {
    $('#additional-vids').empty();
    $('#current-video').empty();

    var firstVideo = this.model.get('videos').models[0];

    /*hardcode the first video so that it displays as the current video
    this property will be dynamically changed via the selectVideo function when invoked*/
    firstVideo.set('current_video', true);

    var modelsArray = this.model.get('videos').models;
    //loop through the array of models in order to render the current video and the additional videos list
    for (var i = 0; i < modelsArray.length; i++) {
      if (modelsArray[i].get('current_video') === true) {
        this.renderCurrentVideo(this.model.get('videos').models[i]);
      } else {
        this.renderVideo(this.model.get('videos').models[i]);
      }
    }
  },

  //there was certainly a more DRY way of doing this, but it's late and it works
  updateRenderVideos: function () {
    $('#additional-vids').empty();
    $('#current-video').empty();
    var modelsArray = this.model.get('videos').models;
    for (var i = 0; i < modelsArray.length; i++) {
      if (modelsArray[i].get('current_video') === true) {
        this.renderCurrentVideo(this.model.get('videos').models[i]);
      } else {
        this.renderVideo(this.model.get('videos').models[i]);
      }
    }
  },

  selectVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.setCurrentVideo(clickedVideoId);
    this.updateRenderVideos();
  }

});
