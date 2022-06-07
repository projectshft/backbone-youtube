var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click .submit-query': 'fetchVideos'
    },

    initialize: function () {
        this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    },

    fetchVideos: function () {
        this.model.get('videos').getData($('.query').val());

        $('.query').val('');
    }
});
