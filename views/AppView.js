//we should only have one instance of AppView
var AppView = Backbone.View.extend({
  //we should mount our AppView instance to the body element
  el: $('body'),

  //since AppView is the controller, it should be responsible for user events
  events: {
    //when the user presses enter after search, searchOnEnter is invoked
    'keypress .form-control': 'searchForVideosOnEnter',
    'click .smaller-video': 'updateClickedCurrentVideo'
  },

  //initialize in invoked when our AppView is created;
  initialize: function() {
    this.$videosListSection = this.$('.video-list-section')

    this.$currentVideoSection = this.$('.current-video-section')

    //when the page is loaded, giraffes should be the default search
    this.model.get('videos').fetchAPIData('giraffes')

    this.listenTo(
      // the app view should listen for a reset in the AppModel
      this.model.get('videos'),
      'reset',
      this.renderVideoList
    )

    //the app view should listen for a change inthe value of the currentVideo key on the model
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo)
  },

  //when the user hits 'Enter', the search commences
  searchForVideosOnEnter: function(event) {
    if (event.which === 13) {
      event.preventDefault()

      $query = this.$('#search-query').val()
      //if the user enters an empty string, an error will be thrown
      if ($query.length == 0) {
        alert('Enter a valid search term to proceed.')
      } else {
        //otherwise, the query term should be added to our AppModel
        this.model.get('videos').fetchAPIData($query)
      }
    }
  },
  //render video by passing in a video model
  renderVideo: function(video) {
    //make an new instance of the videoList view with a key of model
    let videoListView = new VideoListView({ model: video })
    //append the side videos to the videoListSection
    this.$videosListSection.append(videoListView.render().el)
  },
  //render all videos
  renderVideoList: function() {
    //empty the element of any videos
    // each is a method from underscore so we can invoke right in a collection
    this.$videosListSection.empty()
    this.model.get('videos').each(function(v) {
      this.renderVideo(v)
    }, this)
    this.renderInitialCurrentVideo()
  },

  //render the initial current video as the first in the array when the page is loaded
  renderInitialCurrentVideo: function() {
    let initial = new CurrentVideoView({
      model: this.model.get('videos').models[0]
    })
    this.$currentVideoSection.html(initial.render().el)
  },

  //update the currentVideo id key on the model when a specific video is clicked
  updateClickedCurrentVideo: function(event) {
    let clickedCurrentVideo = $(event.currentTarget).data().id
    this.model.changeClickedVideo(clickedCurrentVideo)
  },

  //render currentVideo based on the value of the currentVideo key on the model
  renderCurrentVideo: function() {
    this.model.get('currentVideo')
    let currentVideoView = new CurrentVideoView({
      model: this.model.get('currentVideo')
    })
    this.$currentVideoSection.html(currentVideoView.render().el)
  }
})
