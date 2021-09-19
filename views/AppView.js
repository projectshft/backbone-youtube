var AppView = Backbone.View.extend({
    
    el: $('body'),

    events: {
        'click .video-search': 'handleSearchClick',
        'click .video-thumbnails': 'viewVideo'
    },

    initialize: function () {
        this.$searchInput = this.$('#search-query');        
        
        this.listenTo(this.model.get('videos'), 'reset', this.initialRender);        
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);
        this.listenTo(this.model.get('videos'), 'reset', this.renderThumbnails);
        this.listenTo(this.model, 'change:current_video', this.renderVideo);
        
        
    },

    viewVideo: function (e) {
        var clickedVideoId = $(e.currentTarget).data().id;
        console.log('Thumbnail clicked');
        console.log(clickedVideoId);
        this.model.updateCurrentVideo(clickedVideoId); 
        console.log(this.model.get('current_video'));
        
    },

    handleSearchClick: function() { 
        var searchText = this.$searchInput.val();
        
        this.model.get('videos').updateUrl(searchText);        
        this.model.get('videos').fetch({ reset: true }); 
              
        
    },

    initialRender: function () {        
        this.model.setCurrentVideo(1);
        console.log(this.model.get('current_video')); 

        var mainVideoView = new MainVideoView({ model: this.model.get('current_video')});
        this.$('.video-container').html("");
        this.$('.video-container').append(mainVideoView.render().el); 
    },   
    
    renderVideo: function() { 
        var mainVideoView = new MainVideoView({ model: this.model.get('current_video')});
        this.$('.video-container').html("");
        this.$('.video-container').append(mainVideoView.render().el); 
              
    },

    renderThumbnail: function(video) {
        var videoListView = new VideoListView({ model: video});        
        this.$('.video-list-container').append(videoListView.render().el);
                
    },

    renderThumbnails: function (video) {        
        this.$('.video-list-container').html("");
        this.model.get('videos').each(this.renderThumbnail);
          
    }

});