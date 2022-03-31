let SelectedVideoView = Backbone.View.extend({
    className: 'video',
    initialize: function() {
        // console.log('selected video view initialized');
    },

    template: Handlebars.compile($('#selected-video-template').html()),

    render: function() {
        // console.log('rendering selected video view')
        // console.dir(this.model);
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});