var ListView = Backbone.View.extend({
    className: "list-video",

    id: "",

    initialize: function() {
        this.id = this.model.get('videoId');
        console.log(this.id)
    },

    template: Handlebars.compile($('#list-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});
