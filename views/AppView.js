var AppView = Backbone.View.extend({
    el: $('body'),
    events: {
        'click .videosearch': 'setSearch',
    },
    setSearch: function () {
        this.model.set('searchTerm', this.$('.video-input').val())
    },
    initialize: function () {
        this.listenTo(this.model, 'change:searchTerm', this.searchVideos);
    },
    searchVideos: function () {
        this.model.searchVideos();
    }
}
);