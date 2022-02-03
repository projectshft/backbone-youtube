var AppView = Backbone.View.extend({
    el: $('body'),

    initialize: function (){
        this.$searchBar = this.$('.search-bar');
        this.$mainVideo = this.$('.main-video');
        this.$videoList = this.$('.video-list');

        //fetch default videos on load
        this.model.get('videos').fetch({reset: true});

        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);

        this.listenTo(this.model, 'change:main_video', this.renderMainVideo)
    }, 
    
    events: {
        'click .search-video': 'handleVideoSearch',
        'click .video-list-item': 'handleVideoListItemClick'
    },

    renderPage: function(){
        this.renderMainVideo();
        this.renderVideoList();    
    },
    
    renderMainVideo: function(){
        this.$mainVideo.empty();
        
        var mainVideo = this.model.get('main_video');
        
        var mainVideoView = new MainVideoView({model: mainVideo});
        
        this.$('.main-video').append(mainVideoView.render().el);
    },
    
    renderVideoListItem: function(video){
        var videoView = new VideoListItemView({model: video});
        
        this.$('.video-list').append(videoView.render().el);
    },
    
    renderVideoList: function(){
        this.$videoList.empty();
        
        this.model.get('videos').each(function (video){
            this.renderVideoListItem(video);
        }, this);
    },
    
    handleVideoSearch: function(){
        var searchQuery = this.$searchBar.val();

        if(searchQuery){
            this.model.get('videos').searchForVideos(searchQuery);
        }else{
            alert('Enter a search query.');
        }
    },

    handleVideoListItemClick: function(e){
        var clickedVideoId = $(e.currentTarget).data().id;

        this.model.updateMainVideo(clickedVideoId);
    }
});