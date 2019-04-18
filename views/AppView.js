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
    this.model.get('videos').fetchAPIData(this.model.get('query'))

    this.$query = this.$('#search-query')

    this.$videosListSection = this.$('.video-list-section')

    this.$currentVideoSection = this.$('.current-video-section')

    this.template1 = Handlebars.compile(this.$currentVideoSection.html())
    this.template2 = Handlebars.compile(this.$videosListSection.html())

    this.listenTo(
      this.model.get('videos'),
      'reset',
      function() {
        //    this.renderVideos();
        //    this.renderMainVideo();
      },
      this
    )

    //    this.render();

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
      if (this.$query.val().length === 0) {
        alert('Enter a valid search term to proceed.')
      } else {
        this.model.set('query', this.$query.val())
        //this.model.get('query');
        this.model.get('videos').fetchAPIData(this.model.get('query'))
      }
      //this.model.get('videos').fetchAPIData();

      //invoke parse after fetch
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
