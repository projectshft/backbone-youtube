var AppView = Backbone.View.extend({
    el: $('body'),

    template: Handlebars.compile($('#current-video').html()),
    

    events: {
        'click #video-search-button': 'videoSearch'
    },

    initialize: function () {
        this.$searchInput = this.$('.video-search');
        
        
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
        this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
        this.listenTo(this.model.get('videos'), 'change:currentVideo', this.videoSearch);
    },

    videoSearch: function (e) {
        this.$searchInput.val()
        if (e.which === 13);
        // this.model.get('videos').searchVideo(videoSearch);
        // this.$searchInput.val('');
    },

    // updateOnEnter: function (e) {
    //     if (e.which === 13) {
    //         // this.videoSearch();
            
    //     }
    // },

    renderVideos: function () {
        var currentVideoView = new CurrentVideoView({model: this.model.get('defaultVideo')});
        this.$('#current-youtube-video').append(currentVideoView.render().$el);
    }
});