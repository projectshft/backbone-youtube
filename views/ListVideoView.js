var ListVideoView = Backbone.View.extend({

    className: 'video',

    // Template for video item in list. 
    template: Handlebars.compile($('#list-video-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
}); 