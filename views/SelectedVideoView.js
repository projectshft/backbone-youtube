var SelectedVideoView = Backbone.View.extend({
    el: $('.video-player'),

    template: Handlebars.compile($('#selected-video-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});
