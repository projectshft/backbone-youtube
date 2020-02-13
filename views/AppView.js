var AppView = Backbone.View.extend({

    el: $('body'),

    events: {
        'click .search-btn': 'videoLookUp',
        'click .video-title': 'changeVideo'
       

    },

    initialize: function () {
        this.$searchInput = this.$('#video-search');
        this.$searchButton = this.$('.search-btn');
        this.$videoPlayer = this.$('.video-player');
        this.$videoQue = this.$('.video-que');

        this.listenTo(this.model.get('videos'), "reset", this.renderAll);
        // this.listenTo(this.model, 'change:currentVideo', this.renderVideoPlayer);
        
    },

    videoLookUp: function () {
        var searchVal = $(event.target).siblings('#video-search').val();
          //checks to make sure the input isn't equal to an empty string
          if (searchVal !== '') {
            this.model.set('query', searchVal);
            // reset the search input field to an empty string
            searchVal = '';
            
        } else {
            throw new Error('You must have a value in the search input')
        }

        
     
    },

    firstFetch: function (initialVid) {
     this.model.set('query', initialVid )   
    },

    renderAll: function() {
        //We need this id to allow for src of the iframe in the html
        this.renderVideoPlayer(this.model.get('videos').at(0).get('videoId'))

        this.renderVideoQue()
    },

    renderVideoPlayer: function (videoId) {
        var firstVideo = this.model.get('videos').where({videoId: videoId})[0];

        var currentVideoView = new CurrentVideoView({model: firstVideo});

        //Removes the current playable video
        this.$el.find('.video-player').empty();

        //This appends the new html under the videoplayer class
        this.$el.find('.video-player').append(currentVideoView.render().el);
    },

    renderVideoQue: function () {
        //Clears out the video-que view so that new videos render on the que
        this.$el.find('.video-que').empty();

        var videos = this.model.get('videos');
        var playlist = this.$videoQue;

        //loop through each model and append it under video-que class in the index
        videos.forEach(function(video) {
            var videoQueView = new VideoQueView({model: video})
            playlist.append(videoQueView.render().el); 
        })   
    },

    changeVideo: function (event) {
        //Invoke rendervideoplayer with the id grabbed from the data attribute
        dataAttributeId =  $(event.currentTarget).closest('.view-video').data('data-id');
        this.modle.set('currentVideo', dataAttributeId)
        debugger
    }


})