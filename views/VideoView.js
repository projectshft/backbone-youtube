var VideoView = Backbone.View.extend({
    className: 'player-video',

    template: Handlebars.compile($('#single-video-template').html()),

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
