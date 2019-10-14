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
        localStorage.setItem('searchTerm', this.model.get('searchTerm'));
        this.model.searchVideos();
    },
    renderVideos: function () {
        this.$videoList.empty();
        var resultVideos = this.model.get('videos');
        resultVideos.each(function (m) {
            this.renderVideo(m);
        }, this);

        //auto load the first video if none are loaded (usually only on page load)
        if (!this.singleVideoView && resultVideos.length > 0) {
            this.model.showVideo(resultVideos.at(0).get('videoId'));
        }
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