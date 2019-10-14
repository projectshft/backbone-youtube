var AppView = Backbone.View.extend({
    el: $('body'),
    events: {
        'click .videosearch': 'setSearch',
        'click .video-link': 'viewVideo',
    },
    setSearch: function () {
        this.model.set('searchTerm', this.$('.video-input').val())
    },
    initialize: function () {
        this.singleVideoView = null;
        this.$videoList = this.$('.video-list');

        this.listenTo(this.model, 'change:searchTerm', this.searchVideos);
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
        this.listenTo(this.model, 'change:current_video', this.renderVideoView);
    },
    searchVideos: function () {
        this.model.searchVideos();
    },
    renderVideos: function () {
        this.$videoList.empty();
        this.model.get('videos').each(function (m) {
            this.renderVideo(m);
        }, this);
    },
    renderVideo: function (video) {
        var searchView = new SearchResultView({ model: video });
        this.$videoList.append(searchView.render().el);
    },
    viewVideo: function (e) {
        var clickedVideoId = $(e.currentTarget).data().id;

        this.model.showVideo(clickedVideoId);
    },
    renderVideoView: function () {
        if (this.singleVideoView) {
            this.singleVideoView.remove();
        }

        this.singleVideoView = new VideoView({ model: this.model.get('current_video') });

        this.$('.single-video-view').append(this.singleVideoView.render().el);
    }
}
);