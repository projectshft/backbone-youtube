var VideoCarouselView = Backbone.View.extend({
    className: "video",

    template: Handlebars.compile($('#carousel-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});
