var ListView = new Backbone.View.extend({
    className: "list-video",

    template: Handlebars.compile($('#list-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});
