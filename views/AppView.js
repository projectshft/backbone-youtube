//we should only have one instance of AppView
var AppView = Backbone.View.extend({
  //we should mount our AppView instance to the body element
  el: $('body'),

  //since AppView is the controller, it should be responsible for user events
  events: {
    'keypress .form-control': 'searchOnEnter'
  },

  //initialize in invoked when our AppView is created; it should listen for new search queries
  initialize: function() {
    // when page is loaded, giraffe videos are visible until a user makes a new search
    this.model.get('videos').fetchAPIData('giraffe')

    this.$query = this.$('#search-query')

    this.$videosListSection = this.$('.video-list-section')

    this.$currentVideoSection = this.$('.current-video-section')

    this.template1 = Handlebars.compile(this.$currentVideoSection.html())
    this.template2 = Handlebars.compile(this.$videosListSection.html())

    this.listenTo(
      // the app view should listen for a reset in the AppModel
      this.model.get('videos'),
      'reset',
      this.renderVideos
    )
    //the app vide should listen for a change in the query
    this.listenTo(this.model, 'change:query', this.searchOnEnter)
  },

  // for rendering the side videos
  renderVideos: function() {
    this.model.get('videos').each(function(v) {
      var videoView = new SideVideoView({ model: v })

      this.$currentVideoSection.append(videoView.render().el)
    })
  },

  //when the user hits 'Enter', the search commences
  searchOnEnter: function(e) {
    if (e.which === 13) {
      e.preventDefault()

      //if the user enters an empty string, an error will be thrown
      if (this.$query.val().length === 0) {
        alert('Enter a valid search term to proceed.')
      } else {
        //otherwise, the query term should be added to our AppModel
        this.model.get('videos').fetchAPIData(query)
      }
    }
  },
  // renderVideos : function() {
  //     this.$videosListSection.append(this.model.get('videos').render().el);
  //     console.log($videosListSection)
  // },

  render: function() {
    // this.$el.empty();

    this.$currentVideoSection.append(this.model.get('videos').el)
    console.log(
      'the current video section now looks like:',
      this.$currentVideoSection
    )
    this.$el.html(this.template1(this.model.get('videos').models[0].attributes))

    for (var i = 0; i < this.model.get('videos').length - 1; i--) {
      this.$videosListSection.append(this.model.get('videos').el)
      console.log(
        'the videos list section now looks like:',
        this.$videosListSection
      )
      this.$el.html(
        this.template1(this.model.attributes.videos.models[i].attributes)
      )
    }

    return this
  }
})
