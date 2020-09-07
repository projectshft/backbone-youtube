var SideVideoView = Backbone.View.extend({
    className: 'side-video',

    //Write template function here
    template: Handlebars.compile($('#side-video-template').html()),

    render: function() {
        //template this.model.toJSON()

        return this;
    }
})