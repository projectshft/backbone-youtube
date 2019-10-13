var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click #video-search-button': 'videoSearch'
    },

    initialize: function () {
        this.$searchInput = this.$('.video-search');
        
        this.listenTo(this.model.get('videos'), 'reset', this.videoSearch);
        this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
        this.listenTo(this.model.get('videos'), 'change:currentVideo', this.videoSearch);
    },

    videoSearch: function () {
        this.$searchInput.val()
            console.log(videoSearch)

    
        // this.$searchInput.val('');
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