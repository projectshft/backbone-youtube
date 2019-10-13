var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click #video-search-button': 'videoSearch'
    },

    initialize: function () {
        this.$searchInput = this.$('.video-search');
        
        this.listenTo(this.model.get('videos'), 'reset', this.videoSearch);
        this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
        this.listenTo(this.model.get('videos'), 'change:currentVideo', this.renderVideos);
    },

    videoSearch: function () {
        this.model.get('videos').addVideos(
            this.$searchInput.val(),
            

        );
        this.$searchInput.val('');
    },

    updateOnEnter: function (e) {
        if (e.which === 13) {
            this.videoSearch();
            
        }
    },

    renderVideos: function () {
        console.log('test')
        this.$el(videoSearch);
    }
});