var AppView = Backbone.View.extend({
      el: $('body'),

      //listen for new searches or videos. Fetch the appropriate videos when user presses enter. Change current video with the up next video that the user clicks
      events: {
        'keypress #search-bar': 'findVideos',
        'click #current-video': 'showCurrentVideo'
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

      //fetch data from collection when user presses enter
      findVideos: function(e) {
        if(e.which === 13 && this.$input.val()) {
          this.model.set('query', this.$input.val());
          this.model.get('videos').fetchVideos(this.model.get('query'));
          this.$input.val('');
        }
      },

      renderCurrentVideo: function() {
        this.$('#current-video').empty();
        var upNext = new CurrentView({
          model: this.model.get('current_video') || this.model.get('videos').models[0]
        });
        this.$('#current-video').append(upNext.render().el);
        },

      renderNextVideos: function () {
        this.$nextVideo.empty();
        for(var i = 1; i < this.model.get('videos').models.length; i++) {
          var nextVideo = this.model.get('videos').models[i];
          var nextVideoList = new CurrentView({model: nextVideo});
          this.$nextVideo.append(nextVideoList.render().el);
        }
      },

      showCurrentVideo: function(e) {
        var currentVideoId = $(e.currentTarget).data.id();
        var selectedVideo = this.model.get('videos').findWhere({id: currentVideoId});
        this.model.set('current_video', selectedVideo);
      }
    });


