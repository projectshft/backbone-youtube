var CurrentView = Backbone.View.extend({
    id: "current-video",

    template: Handlebars.compile($('#current-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});