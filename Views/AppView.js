//renders whole screen and trigger renders for its children

var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click .view-Video': 'viewVideo',
    },

    initialize: function () {
        this.$relatedList = this.$('.related-videos');
        this.listenTo(this.model.get('videoList'), 'add', this.renderVideo);

        this.playerView = null;

        this.listenTo(this.model, 'change:current_video', this.renderPlayerView);

        //render view as soon as collection finishes sync with API
        this.listenTo(this.model.get('videoList'), 'reset', this.renderVideoList);

        this.renderVideoList();
    },

    viewVideo: function (e){
        var clickedId = $(e.currentTarget).data().id;
        this.model.changePlayingVideo(clickedId);
    },

    renderVideo: function (VideoModel) {
        var listView = new ListView({ model: VideoModel });  
        this.$relatedList.append(listView.render().el); //$el 
    },

    renderVideoList: function () {
        this.model.get('videoList').each(function (m) {
            this.renderVideo(m);
        }, this);
    },

    renderPlayerView: function () {
        if (this.playerView) {
            this.playerView.remove();
        }

        this.playerView = new PlayerView({ model: this.model.get('current_video') });

        this.$('.player-container').append(this.playerView.render().el);
    },

});