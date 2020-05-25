var ListView = Backbone.View.extend({
    className: "list-video",

    template: Handlebars.compile($('#list-template').html()),

    events: {
        'click': 'setToCurrent'
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    //change list video's "current" status when clicked
    setToCurrent: function () {
        this.model.set('current', true); //sets off event to update current video
    }
});
