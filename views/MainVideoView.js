var MainVideoView = Backbone.View.extend ({
    className: 'main-video',

    template: Handlebars.compile($('#main-video-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    initialize: function () {
        this.listenTo(this.model.get('videos'), 'change', this.render);
    }
});