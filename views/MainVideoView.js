var MainVideoView = Backbone.View.extend({
    className: 'video',

    template: Handlebars.compile($('#main-video-template').html()),
    // write handlebars templating function here

    events: {
        //write click events to be on video model
        //when a different video is clicked. it becomes curent video for this view
    },

    initialize: function () {
        //write listenTo functions
    },


    render: function() {
        //write render function for this.model.toJSON()
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
    
})