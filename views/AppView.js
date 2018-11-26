var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'keypress #search-bar': 'searchVideos',
    'click .list-group-item': 'selectVideo'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'change', this.renderVideo);
    // this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.renderVideos();
  },

  searchVideos: function(e) {
    if (e.which === 13) {
      //set a variable to the value of the user's search
      var query = $('#search-bar').val();
        if (query.length === 0) {
          //error handling to account for an empty search query
          alert('Please enter a valid video topic to search!');
        } else {
        //set a new attribute to the AppModel that represents the query
        this.model.set('query', query)
        this.model.get('videos').getVideos(this.model.get('query'));
      }
    }
  },

  renderVideo: function (video) {
      var videoView = new VideoView({ model: video });
      this.$('#additional-vids').append(videoView.render().el)
  },

  renderVideos: function () {
    //this will allow for the view to cycle through each video and render them accordingly
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
  },

  selectVideo: function() {


  }


});


 //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=
