var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keypress #search': 'searchOnEnter'
  },

  initialize: function() {
    //listen for change in model's VideoCollection and create new view for each videoModel
    this.$videos = $('#videos-container');
    this.$thumbnails = $('#thumbnails-container');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'change:mainVideo', this.render);
    this.listenTo(this.model, 'change:videosFound', this.showError);
    this.listenTo(this.model, 'change:searchTerm', this.clearSearchBox)
    // When user loads page, there should be a default search with videos loaded so page is not blank.
    this.search('cute_goat_screaming_compilation')
  },

  template: Handlebars.compile($('#main-video-template').html()),

  render: function() {
    this.mainVideo = this.model.get('videos').findWhere({
      mainVideo: true
    });
    //only change view when a new mainVideo has been added
    if (this.mainVideo) {
      //set mainVideo, append main video to videos container, then append thumbnails
      this.$videos.empty();
      //put first element in container into main video template
      this.$videos.append(this.template(this.mainVideo.attributes))
      //remove current main video from sidebar OR get all videos and add to sidebar
      this.model.get('videos')
    }
    return this;
  },

  renderVideos: function(video) {
    //set first result's mainVideo attribute to true
    this.model.get('videos').at(0).set('mainVideo', true)
    //when new video added, create new view for that video, then append to list
    var videoView = new CurrentVideoView({
      model: video
    });
    this.$thumbnails.append(videoView.render().el);
  },

  searchOnEnter: function(e) {
    this.$input = $('#search').val();
    if (this.$input && e.keyCode === 13) {
      // search using input
      this.search(this.$input);
    }
  },

  search: function(input) {
    // update search URL and fetch videos
    this.model.set('searchTerm', input);
    this.searchUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAHIxQiOVT5-aeAYSbPo50xltCAt4B9Hok&part=snippet&type=video&q=${input}`;
    var videos = this.model.get('videos')
    //first, remove all videos previously in collection
    videos.url = this.searchUrl;
    videos.remove(videos.toArray());
    videos.fetch({
      success: function() {
        if (_.isEmpty(appModel.get('videos').toArray())) {
          appModel.set('videosFound', false);
        } else {
          appModel.set('videosFound', true);
        }
      },
      error: function() {
        window.alert('There was an error loading videos. Please try again.')
      }
    });

  },

  errorTemplate: Handlebars.compile($('#error-template').html()),
  showError: function() {
    //listen for change in videosFound. if false, empty videoscontainer and show error
    if (!this.model.get('videosFound')) {
      this.$videos.html(this.errorTemplate(this.model.attributes));
    }
  },

  clearSearchBox: function() {
    $('#search').val('');
  }

})
