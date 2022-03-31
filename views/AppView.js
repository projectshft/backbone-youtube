let AppView = Backbone.View.extend({
    el: $('body'),
    events: {
        'click #search': 'handleGetVideos',
        'click .video-option': 'handleSelectVideo'
    },
    initialize: function() {
        // console.log('app view initialized');
        this.listenTo(this.model, 'change:selectedVideoId', this.renderSelectedVideo);
        this.listenTo(this.model, 'change:videos', this.handleVideoChange);
        // this.listenTo(this.model, 'change:videos', function() {
        //     this.renderVideoOptions();
        //     this.model.set('selectedVideoId', this.model.get('videos').models[0]);
        //     console.dir(this.model.get('videos'));
        //     console.log('videos changed');
        // });
        this.renderVideoOptions();
        this.renderSelectedVideo();
    },

    //
    handleVideoChange: function() {
        console.log('videos changed');
        this.renderVideoOptions();
            this.model.set('selectedVideoId', this.model.get('videos').models[0]);
            // console.dir(this.model.get('videos'));
            console.log('videos changed');
    },
    //

    handleGetVideos: function() {
        let searchTerm = this.$('#search-bar').val().replace(' ', '+');
        
        console.log(searchTerm);

        ////
        // this.model.set('videos', new VideosCollection([{id: 3, video_url: 'https://www.youtube.com/embed/5_sfnQDr1-o', title: 'Baby Monkey on a Pig', description: 'A baby monkey rides backwards on a pig'}], {searchTerm: searchTerm}));
        ////

        this.model.set('videos', new VideosCollection([], {searchTerm: searchTerm}));
        // console.dir(this.model.get('videos'));
        //once new collection initialized need to then fetch, then listen to changes on collection, then get first video in collection and save it to selected video, then render the selected video and all video options, via this.renderVideoOptions and this.renderSelectedVideo

        this.model.get('videos').fetch();
        
        console.log('successfully searched');
        // this.model.get('videos').getVideos();
    },

    handleSelectVideo: function(evt) {
        // console.log('handle select video ran');
        //get id of clicked video, set appropriate attribute on appModel
        let clickedVideoId = this.$(evt.target).data().id;
        // console.log(clickedVideoId);
        this.model.set('selectedVideoId', clickedVideoId);
    },

    renderSelectedVideo: function(vid) {
        //get model from collection whose id matches selectedVideoId
        //create instance of SelectedVideoView using this model
        //clear the container for the selected video
        //append the view to the container
        let selectedVideoModel = this.model.get('videos').get(this.model.get('selectedVideoId'));




        console.log('render selected video ran');

        // console.log(vid);
        // console.log('test');
        // console.log(selectedVideoModel);
        let selectedVideo = new SelectedVideoView({model: selectedVideoModel});
        this.$('.selected-video').empty();

        this.$('.selected-video').append(selectedVideo.render().el);
    },
    
    renderVideoOption: function(vid) {
        console.log('rendering a video option')
        console.dir(vid);
        console.log('video option rendered')
        // console.log('rendering a video option');
        let videoOptionView  = new VideoOptionView({model: vid});
        this.$('.video-options').append(videoOptionView.render().el);
    },

    renderVideoOptions: function() {
        console.log('render video options ran');
        // console.dir(this.model.get('videos'));
        // this.$('.video-options').empty();
        console.log(this.model.get('videos'));
        console.log('about to render individual video options')
        this.model.get('videos').each(function(vid) {
            this.renderVideoOption(vid);
        }, this);
    }

});