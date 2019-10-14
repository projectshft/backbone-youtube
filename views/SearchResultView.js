var SearchResultView = Backbone.View.extend({
    className: 'video',

    template: Handlebars.compile($('#video-template').html()),

    events: {
    },

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        //this.$nameInput = this.$('.edit-mode');

        return this;
    }
});
