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


        this.listenTo(this.model.get('videos'), 'update:currentSearchTerm', this.renderSearchedVideo)
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideos)
        this.listenTo(this.model.get('videos'), 'change', this.renderVideos);

        this.renderVideos();
    },

    //This function takes in a search value 
    videoSearch: function (e) {

        
        e.preventDefault();
        
        var searchInput = this.$('#video-search').val()
    
        if (e.which === 13) {

            this.model.setKeyword(searchInput)

        }
    
    },



    //This function renders the default video to come up on when a user comes to the site 
    renderVideo: function (video) {
        this.$('#current-youtube-video').empty();
        var currentVideoView = new CurrentVideoView({ model: video });
        this.$currentVideo.append(currentVideoView.render().el);
    },

    renderVideos: function () {
        this.model.get('videos').each(function (m) {
            this.renderVideo(m);
        }, this);
    },

    //This is the function that controls the side images on search 
    renderSideImages: function () {
        this.$('#current-youtube-video').empty();
        var sideVideo = [];
        for (var i = 0; i < sideVideo.length; i++) {
            var element = array[i];

            var currentVideoView = new CurrentVideoView({ model: this.model.get('defaultVideo') });
            this.$('#current-youtube-video').append(currentVideoView.render().$el);
        }
    },

});