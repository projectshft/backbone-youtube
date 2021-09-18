var VideoListView = Backbone.View.extend({
    className: 'videolist',

    template: Handlebars.compile($('#video-list-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    initialize: function () {
    this.listenTo(this.model.get('videos'), 'change', this.render);
    }
})






    