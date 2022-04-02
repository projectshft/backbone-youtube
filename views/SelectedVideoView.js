let SelectedVideoView = Backbone.View.extend({
    className: 'video',

    template: Handlebars.compile($('#selected-video-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});