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

    //set video to current when clicked
    setToCurrent: function() {
        console.log("setting to current");
        this.model.set('current', true);
        console.log(this.model)
    }
});
