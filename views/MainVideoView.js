var MainVideoView = Backbone.View.extend({
    className: 'main-video',

    template: Handlebars.compile($('#main-video-template').html()),

    // events: {
    //     'click .video': 'makeMainVideo'
    // },

    initialize: function () {
        //this.listenTo(this.model, 'change', this.render);
    },

    // makeMainVideo: function () {
    //     console.log("make this main video"); //, this.model.get('videoId')); 
    // },

    render: function () {
        console.log("render main video");
        //debugger;
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
}); 