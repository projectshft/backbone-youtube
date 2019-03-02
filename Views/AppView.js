var AppView = Backbone.View.extend({
      el: $('body'),

      events: {
        'keypress #search-bar': 'findVideos',
        'click .video-list-next': 'showCurrentVideo'
      },

      initialize: function() {
        this.$input = this.$('#search-bar');
        this.$nextVideo = this.$('#up-next-videos');

        this.listenTo(this.model.get('videos'), 'reset', function() {
          this.renderCurrentVideo();
          this.renderNextVideos();
        })
        this.listenTo(this.model, 'change: current_video', this.renderCurrentVideo);
      },

      //fetches your 5 videos from youtubeAPI based on your search query and adds them to the collection
      findVideos: function(e) {
        if(e.which === 13 && this.$input.val()) {
          this.model.set('query', this.$input.val());
          this.model.get('videos').fetchVideos(this.model.get('query'));
          this.$input.val('');
        }
      },

      //renders your currently playing video
      renderCurrentVideo: function() {
        this.$('#current-video').empty();
        var current = new CurrentView({
          model: this.model.get('videos').models[0]
        });
        this.$('#current-video').append(current.render().el);
        },

      //loops through and renders your upcoming videos
      renderNextVideos: function () {
        this.$nextVideo.empty();
        for(var i = 1; i < this.model.get('videos').models.length; i++) {
          var nextVideo = this.model.get('videos').models[i];
          var nextVideoList = new CurrentView({model: nextVideo});
          this.$nextVideo.append(nextVideoList.render().el);
        }
      },

      //replaces the currently playing video with the clicked video from the list of upcoming videos
      showCurrentVideo: function(e) {
        var currentVideoId = $(e.currentTarget).data().videoId();
        var selectedVideo = this.model.get('videos').findWhere({videoId: currentVideoId});
        this.model.set('current_video', selectedVideo);
      }
    });


