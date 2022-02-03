var MainVideoView = Backbone.View.extend({
    className: 'main-video',

    model: VideoModel,

    template: Handlebars.compile($('#main-video').html()),

    render: function(){
        this.$el.html(this.template(this.model));
        return this;
    }
})