var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'keypress #search-bar': 'searchVideos',
    'click .list-group-item': 'selectVideo'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    //initial a get request
    this.model.get('videos').getVideos(this.model.get('query'));


    // this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    // this.renderVideos();
  },

  searchVideos: function(e) {
    if (e.which === 13) {
      //set a variable to the value of the user's search
      var query = $('#search-bar').val();
        if (query.length === 0) {
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
    // var loopingVariable = this.model.get('videos').models;
    // var loopingVids = this.model.get('videos').length;
    // for (var i = 0; i < loopingVariable.length; i++) {
      // if (loopingVariable[i] > 0) {
        var videoView = new VideoView( { model: video } );
        this.$('#additional-vids').append(videoView.render().el);
      // }
    // }
  },

  renderCurrentVideo: function (video) {
    var currentVideoView = new CurrentVideoView ( { model: video } );
    this.$('#current-video').append(currentVideoView.render().el)
  },

  renderVideos: function () {
    $('#additional-vids').empty();
    $('#current-video').empty();

    var firstVideo = this.model.get('videos').models[0];

    this.renderCurrentVideo(firstVideo);

    for (var i = 1; i < this.model.get('videos').models.length; i++) {
      this.renderVideo(this.model.get('videos').models[i]);
    }
  },

  selectVideo: function() {


  }


});
