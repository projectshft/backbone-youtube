//This is the appview for the appmodel
var AppView = Backbone.View.extend({
    el: $('body'),

    // template for the current video that populates on search
    template: Handlebars.compile($('#current-video').html()),

    // these are the events that take place that direct functions 
    events: {
        'click #video-search-button': 'videoSearch'
    },

    // This is the initialize function that occur
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
    },

    
    renderVideo: function() {
        
        var allVideos = this.model.get('videos').slice()
        var mainVideo = allVideos[0];
        var sideVideos = allVideos.slice(1)
        
        console.log('one video',allVideos)



        this.renderMainVideo(mainVideo)
        this.renderSideVideos(sideVideos)
        
    },

    //This function renders the default video to come up on when a user comes to the site 
    renderMainVideo: function (mainVideo) {
        this.$currentVideo.empty();
        var currentVideoView = new CurrentVideoView({ model: mainVideo });

        this.$currentVideo.append(currentVideoView.render().el);
    },

    renderSideVideos: function (sideVideos) {
        debugger;
        this.$sideVideos.empty();
        var sideVideoView = new SideVideoView({ model: sideVideos });

        this.$sideVideos.append(sideVideoView.render().el);
       
       
        // this.model.get('videos').each(function (m) {
        //     this.renderMainVideo(m);
        // }, this);
    },


});