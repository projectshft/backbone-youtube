var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click .video-search': 'handleSearchClick',
        'click .video-thumbnails': 'viewVideo'
    },

    initialize: function () {
        this.$searchInput = this.$('#search-query');

        this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);
        this.listenTo(this.model.get('videos'), 'reset', this.renderThumbnails);
    },

    viewVideo: function (e) {
        var clickedVideoId = $(e.currentTarget).data().id.videoId;

        this.model.updateCurrentVideo(clickedVideoId);
    },



    handleSearchClick: function() { 
        var searchText = this.$searchInput.val();
        
        this.model.get('videos').updateUrl(searchText);        
        this.model.get('videos').fetch({ reset: true }); 
        this.model.updateCurrentVideo(0);              
    },

    renderVideo: function(video) {
        var mainVideoView = new MainVideoView({ model: video});
        this.$('.video-container').html("");
        this.$('.video-container').append(mainVideoView.render().el);        
    },

    renderThumbnails: function(video) {
        var videoListView = new VideoListView({ model: video});
        this.$('.video-list-container').html("");
        this.model.get('videos').each(this.$('.video-list-container').append(videoListView.render().el));
        
    }

    

    
});