var AppView = Backbone.View.extend({
  //already exists on the page, so setting DOM element to body
  el: $('body'),

  //needs to listen for user events on the view
  events: {
    //on enter, call search function
    'keypress .search-input': 'searchVideo',
    //needs to listen for click on waiting videos
    'click .queued-video': 'triggerVideoSwitch'
  },

  //when page loaded, do the following things
  initialize: function() {
    //kick off initial search so page loads with video, API called using this function in collection
    this.model.get('videos').initialSearch();
    //listen for additions to the collection and render page
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);
    //listen for change in currently playing attribute on App Model to trigger render
    this.listenTo(this.model, 'change', this.switchVideoViews);

  },


  // searchVideo, control for empty search criteria here before API call
  searchVideo: function(e) {
    //if event trigger is enter key
    if (e.which === 13) {
      //nested conditional to check for empty input
      if ($('.search-input').val().length === 0) {
        alert('Please enter search criteria');
      } else {
        var search = $('.search-input').val();
        this.model.get('videos').fetchData(search);
      }
    }

  },

  //trigger videoswitch will call function in app model to change currently playing video
  triggerVideoSwitch: function(e) {
    //sets variable passed in to switch video function as the data-id captured from the clicked DOM element
    var newVideoId = $(e.currentTarget).data().id;
    this.model.switchVideo(newVideoId);
  },

  //function to update playing video view with playing video from model, set after user click
  switchVideoViews: function() {
    //empty current DOM node
    this.$('.currently-playing').empty();
    //create new view, passing in info from playing video attribute on the model
    playingVideoView = new PlayingVideoView({
      model: this.model.get('playingVideo')
    })
    this.$('.currently-playing').append(playingVideoView.render().el)
  },

  //render currently playing video upon change in collection
  renderVideo: function() {
    //clear current DOM nodes
    this.$('.currently-playing').empty();
    this.$('.waiting-videos').empty();

    //loop through collection
    for (var i = 0; i < this.model.get('videos').length; i++) {
      //set currently playing video view to display first model
      if (i === 0) {
        var playingVideoView = new PlayingVideoView({
          model: this.model.get('videos').models[0]
        })
        this.$('.currently-playing').append(playingVideoView.render().el)
        //loop through remaining 4 models and populate to page with waiting video views
      } else {
        var waitingVideoView = new WaitingVideoView({
          model: this.model.get('videos').models[i]
        })
        this.$('.waiting-videos').append(waitingVideoView.renderQueue().el)
      }
    }
  },
});
