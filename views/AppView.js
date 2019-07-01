var AppView = Backbone.View.extend({

    el: $('body'),

    // Handle two events: click on search button and click on video thumbnail (to change main video). 
    events: {
        'click .search-videos': 'searchVideos',
        'click .view-video': 'viewVideo'
    },

    initialize: function () {
        // Set variables for jquery selectors. 
        this.$searchInput = this.$('#search-input');
        this.$videoList = this.$('.video-list');
        this.$videoMain = this.$('.video-main');

        // Listen for changes to the videos collection (by search) and to current (or main) video. 
        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
        this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
    },

    // Render list of videos and main video when collection changes. 
    renderPage: function () {
        this.renderMainVideo(); 
        this.renderListVideos(); 
    },

    // Set a clicked video in list to main video (using function from model). 
    viewVideo: function (e) {
        var clickedVideoId = $(e.currentTarget).data().id;
        this.model.makeClickedVideoMain(clickedVideoId);
    },

    // On search button click, change the url (using function from model), perform fetch, and clear input. 
    // (Edge case: when input field is blank, it returns trending/popular videos, which is acceptable for users.) 
    searchVideos: function () {
        var query = this.$searchInput.val();
        this.model.setSearchUrl(query);

        // NOTE: must handle edge case here (i.e., no search results -> fetch returning empty collection). 
        this.model.get('videos').fetch({ reset: true });
        
        this.$searchInput.val('');
    },

    // Create and render main video (first search result if not set, clicked result otherwise). 
    renderMainVideo: function () {
        var mainVideo;
        if (!this.model.get('current_video')) {
            mainVideo = this.model.get('videos').at(0);
        } else {
            mainVideo = this.model.get('current_video');
        }
        var mainVideoView = new MainVideoView({ model: mainVideo });
        this.$videoMain.html(mainVideoView.render().el);
    },

    // Create and render a video in the list. 
    renderListVideo: function (video) {
        var listVideoView = new ListVideoView({ model: video });
        this.$videoList.append(listVideoView.render().el);
    },

    // Loop through and create/render each video from collection. 
    renderListVideos: function () {
        this.$videoList.html('');
        this.model.get('videos').each(function (m) {
            this.renderListVideo(m);
        }, this);
    }
});