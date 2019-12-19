// Video view for the current video 
var CurrentVideoView = Backbone.View.extend({
    className: 'current-video',

    template: Handlebars.compile($('#current-video').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this
    }

});