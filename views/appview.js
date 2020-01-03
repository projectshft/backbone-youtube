//This is the appview for the appmodel
var AppView = Backbone.View.extend({
    el: $('body'),

    // template for the current video that populates on search
    template: Handlebars.compile($('#current-video').html()),

    // these are the events that take place that direct functions 
    events: {
        'click #video-search-button': 'videoSearch',
        'click .side-video': 'sideVideoIdClicked'
    },

    // On page load we render the default videos from here and also start listening for events 
    initialize: function () {
        this.$searchInput = this.$('#video-search');

        this.$currentVideo = this.$('.current-video');
        this.$sideVideos = this.$('.side-videos');


        this.listenTo(this.model.get('videos'), 'change:currentSearchTerm', this.updateSearchTerm)
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideo)
        this.listenTo(this.model.get('videos'), 'change', this.renderVideo);

        this.renderVideo;
    },

    //This function takes in a search value 
    videoSearch: function (e) {

        e.preventDefault();
        var searchInput = this.$('#video-search').val()
        this.model.setKeyword(searchInput)
        e.target.form[0].value = ''
    },

    //This function takes the first video and sends that video to the renderMainVideo function 
    //It also sends the rest of the videos in the response to the renderSideVideos function 
    renderVideo: function () {
        this.$sideVideos.empty();
        this.$currentVideo.empty();

        var allVideos = this.model.get('videos').slice()
        var mainVideo = allVideos[0];
        // var sideVideos = allVideos.slice(1)

        console.log('all video', allVideos)


        for (var i = 1; i < this.model.get('videos').length; ++i) {
            var sideVideos = this.model.get('videos').models[i];
            this.renderSideVideos(sideVideos)
            console.log('side video', sideVideos)
        }

        this.renderMainVideo(mainVideo)

    },

    //This function renders the default video to come up on when a user comes to the site 
    renderMainVideo: function (mainVideo) {

        var currentVideoView = new CurrentVideoView({ model: mainVideo });

        this.$currentVideo.append(currentVideoView.render().el);
    },

    //This sends the sideVideos to the template in the sideVideoView 
    renderSideVideos: function (sideVideos) {

        var sideVideoView = new SideVideoView({ model: sideVideos });

        this.$sideVideos.append(sideVideoView.render().el);

    },

    //When a side thumbnail is clicked, this function takes in the ID of that 
    //video and updates the currentVideo in the appmodel
    sideVideoIdClicked: function (e) {
        console.log('sideVideoIDClicked', e.currentTarget.children[0].id)
        var targetVideoId = e.currentTarget.children[0].id
        var clickedVideo = this.model.get('videos').findWhere({ id: targetVideoId })
        this.model.updateCurrentVideo(clickedVideo)
    }


});