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
        this.$searchInput = this.$('.video-search');
        
        
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);
        this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
        this.listenTo(this.model.get('videos'), 'change:currentVideo', this.videoSearch);
    },

//This function takes in a search value 
    videoSearch: function (e) {
        this.$searchInput.val()
        if (e.which === 13);
        // this.model.get('videos').searchVideo(videoSearch);
        // this.$searchInput.val('');
    },

    // updateOnEnter: function (e) {
    //     if (e.which === 13) {
    //         // this.videoSearch();
            
    //     }
    // },
//This function renders the default video to come up on  when a user comes to the site 
    renderVideo: function () {
        this.$('#current-youtube-video').empty();
        var currentVideoView = new CurrentVideoView({model: this.model.get('defaultVideo')});
        this.$('#current-youtube-video').append(currentVideoView.render().$el);
    },

//This is the function that controls the side images on search 
    renderSideImages: function () {
        this.$('#current-youtube-video').empty();
        var sideVideo = [];
        for (var i= 0; i < sideVideo.length; i++) {
            var element = array[i];
        
        var currentVideoView = new CurrentVideoView({ model: this.model.get('defaultVideo') });
        this.$('#current-youtube-video').append(currentVideoView.render().$el);
    }   }
});