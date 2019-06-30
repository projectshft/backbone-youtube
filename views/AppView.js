var AppView = Backbone.View.extend({

    el: $('body'),

    events: {
        'click .search-videos': 'searchVideos',
        'click .view-video': 'viewVideo'
    },

    initialize: function () {
        this.$searchInput = this.$('#search-input');
        this.$videoList = this.$('.video-list');
        this.$videoMain = this.$('.video-main');

        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
        this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
    },

    renderPage: function () {
        this.renderMainVideo(); 
        this.renderListVideos(); 
    },

    viewVideo: function (e) {
        var clickedVideoId = $(e.currentTarget).data().id;
        this.model.makeClickedVideoMain(clickedVideoId);
    },

    searchVideos: function () {
        var query = this.$searchInput.val();
        this.model.setSearchUrl(query);
        this.model.get('videos').fetch({ reset: true });
        this.$searchInput.val('');
    },

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

    renderListVideo: function (video) {
        var listVideoView = new ListVideoView({ model: video });
        this.$videoList.append(listVideoView.render().el);
    },

    renderListVideos: function () {
        this.$videoList.html('');
        this.model.get('videos').each(function (m) {
            this.renderListVideo(m);
        }, this);
    }
});