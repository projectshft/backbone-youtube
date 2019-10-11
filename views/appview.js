var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click .search-view': '#video-search'
    },

    initialize: function () {
        this.$searchInput = this.$('.video-search');
    },

    videoSearch: function () {
        this.model.get('search').addSearch(
            this.$searchInput.val()
            
            

        )
    },

    updateOnEnter: function (e) {
        if (e.which === 13) {
            this.close();
        }
});