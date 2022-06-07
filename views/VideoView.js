var VideoView = Backbone.View.extend({
    template: Handlebars.compile($('#video-template').html()),

    className: 'newVideo',

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    }
});
