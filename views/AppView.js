var AppView = Backbone.View.extend({

    el: $('body'),

    events: {
        'click .search-btn': 'videoLookUp',
       

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
        this.renderVideoPlayer(this.model.get('videos').at(0).get('videoId'))

        // this.renderVideoQue()
    },

    renderVideoPlayer: function (videoId) {
        console.log(videoId)
        debugger
        var firstVideo = this.model.get('videos').where({videoId: videoId})[0];

        var currentVideoView = new CurrentVideoView({model: firstVideo});

        //Removes the current playable video
        this.$el.find('.video-player').empty();

        //This appends the new html under the videoplayer class
        this.$el.find('.video-player').append(currentVideoView.render().el);
    },

    renderVideoQue: function () {

    }


})