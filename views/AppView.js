let AppView = Backbone.View.extend({
    el: $('body'),
    events: {
        'click #search': 'handleGetVideos',
        'click .video-option': 'handleSelectVideo'
    },
    initialize: function() {
        this.listenTo(this.model, 'change:selectedVideo', this.renderSelectedVideo);
        this.listenTo(this.model.get('videos'), 'reset', this.handleVideoChange);

        //
        this.listenTo(this.model, 'change:videos', function() {
            console.log('videos change event fired');
            this.renderVideoOptions();
            this.model.set('selectedVideoId', this.model.get('videos').models[0]);
            // console.dir(this.model.get('videos'));
            // console.log('videos changed');
        });

    },

    //
    handleVideoChange: function() {
        this.renderVideoOptions();
        // console.log(this.model.get('videos'));
        this.model.set('selectedVideo', this.model.get('videos').models[0]);
    },
    //

    handleGetVideos: function() {
        let searchTerm = this.$('#search-bar').val().replace(' ', '+');
        this.model.get('videos').url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&videoEmbeddable=true&key=${API_KEY}`;
        this.model.get('videos').fetch({reset: true});
    },

    handleSelectVideo: function(evt) {
        let clickedVideoId = this.$(evt.target).data().id;
        console.log('clickedVideoId:', clickedVideoId);
        this.model.setSelectedVideo(clickedVideoId);
    },

    renderSelectedVideo: function() {
        let selectedVideoModel = this.model.get('selectedVideo');

        console.log(selectedVideoModel);
        console.log('render selected video ran');
        let selectedVideo = new SelectedVideoView({model: selectedVideoModel});
        this.$('.selected-video').empty();

        this.$('.selected-video').append(selectedVideo.render().el);
    },
    
    renderVideoOption: function(vid) {
        let videoOptionView  = new VideoOptionView({model: vid});
        this.$('.video-options').append(videoOptionView.render().el);
    },

    renderVideoOptions: function() {
        this.$('.video-options').empty();
        this.model.get('videos').each(function(vid) {
            console.log('test');
            this.renderVideoOption(vid);
        }, this);
    }

});