//we should only have one instance of AppView
var AppView = Backbone.View.extend({
  //we should mount our AppView instance to the body element
  el: $('body'),

  //since AppView is the controller, it should be responsible for user events
  events: {
    //when the user presses enter after search, searchOnEnter is invoked
    'keypress .form-control': 'searchForVideosOnEnter'
  },

  //initialize in invoked when our AppView is created;
  initialize: function() {
    $query = this.$('#search-query').val()

    this.$videosListSection = this.$('.video-list-section')

    // this.$currentVideoSection = this.$('.current-video-section')

    // this.template1 = Handlebars.compile(this.$currentVideoSection.html())

    this.listenTo(
      // the app view should listen for a reset in the AppModel
      this.model.get('videos'),
      'reset',
      this.renderVideos
    )
    //the app vide should listen for a change in the value of the query key on the model
    this.listenTo(this.model, 'change:query', this.searchForVideosOnEnter)
  },

  //when the user hits 'Enter', the search commences
  searchForVideosOnEnter: function(e) {
    if (e.which === 13) {
      e.preventDefault()

      //if the user enters an empty string, an error will be thrown
      if ($query.length === 0) {
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
  renderVideos: function() {
    //empty the element of any videos
    // each is a method from underscore so we can invoke right in a collection
    this.$videosListSection.empty()
    this.model.get('videos').each(function(v) {
      this.renderVideo(v)
    }, this)
  }
})
