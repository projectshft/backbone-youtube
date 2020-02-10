var AppView = Backbone.View.extend({

    el: $('body'),

    events: {
        'click .search-btn': 'videoLookup',
        'keypress #video-search': 'videoLookup'

    },

    intitialize: function () {
        this.$searchInput = this.$('#video-search');
        this.$searchButton = this.$('.search-btn');
        this.$videoPlayer = this.$('.video-player');
        this.$videoQue = this.$('.video-que');

        this.listenTo(this.model, "change:query", this.model.searchAPI())

    },

    videoLookUp: function (event) {
        console.log('hey')
        var searchVal = $(event.target).siblings('#video-search').val();
          //checks to make sure the input isn't equal to an empty string
          if ((searchVal !== '') ) {
            this.model.set('query', searchVal);
            // reset the search input field to an empty string
            searchVal = '';
        } else {
            throw new Error('You must have a value in the search input')
        }
        
        
    },

    firstFetch: function () {
        
    },

    renderVideoPlayer: function () {
        //this.$videoPlayer.append(CurrentVideoView.render().el);
    }


})