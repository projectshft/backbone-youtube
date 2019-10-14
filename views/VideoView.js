var VideoView = Backbone.View.extend({
    className: 'player-video',
    template: Handlebars.compile($('#single-video-template').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
