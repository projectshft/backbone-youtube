var VideoView = Backbone.View.extend({
    className: 'row',
    events: {
        'click': 'switchVideo'
    },
    initialize: function () {
        //handle changes to the video model
        this.listenTo(this.model, 'change:mainVideo', this.toggleHide)
        // taking the currently playing video out of the side-bar tumbnails view
        this.listenTo(this.model, 'remove', this.removeVideoView)
    },
    template: Handlebars.compile($('#thumbnailTemplate').html()),

    // clears the video from player
    removeVideoView: function () {
        this.remove();
    },

    // 'd-none' class added to hide video in tumbnails if video is playing as main one
    render: function () {
        this.$el.html(this.template(this.model.attributes))
        if (this.model.get('mainVideo')) {
            this.$el.addClass('d-none')
        }
        return this;
    },

    toggleHide: function () {
        this.$el.toggleClass('d-none');
    },
    // switching main video view
    switchVideo: function () {
        // setting currentMainVid to the one playing 
        var currentMainVideo = appModel.get('videos').findWhere({
            mainVideo: true
        })
        if (currentMainVideo) {
            currentMainVideo.set('mainVideo', false);
        }
        this.model.set('mainVideo', true);
    }

});