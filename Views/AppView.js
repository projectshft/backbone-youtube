var AppView = Backbone.View.extend({
      el: $('body'),

      //listen for new searches or videos. Fetch the appropriate videos when user presses enter. Change current video with the up next video that the user clicks
      events: {
        'keypress .search': 'fetchVideos',
        'click .next-video': 'changeCurrentVideo'
      },

      initialize: function() {
        //initial fetch request
        this.model.get('videos').fetchVideos(this.model.get('query'));

        this.listenTo(this.model.get('videos'), 'reset', this.rendernextVideos)
        this.listenTo(this.model, 'change: currentVideo', this.renderCurrentVideo)
      },

      //fetch data from collection when user presses enter
      fetchVideos: function(e) {
        if (e.which === 13) {
          var query = $('#search').val();
            
          this.model.get('videos').fetchVideos($('.search').val());
        }
      },

      //loop and render each of the up next videos
      renderNextVideos: function() {
        this.$('.next-video').empty();
        this.model.get('videos').each(function(vid) {
          this.renderNextVideo(vid);
        }, this);
      }
    });

      //write a render next video function that for an individual video in the up next list.
      //also need to figure out how to change your current video to be one of the upNext videos when it's clicked...need a function that does thumbnails
      //As of right now, nothing is showing up beyond your search bar. Spend some time debugging, double check to make sure you have the appropriate views, models, and collections defined.Right now you have no obvious errors in your console, so it could be a data flow issue/you are missing a key piece that will give you the needed functionality
      //You haven't done any edge testing. Include the following: what happens when a user's query isn't a string? Should this be allowed or no?
