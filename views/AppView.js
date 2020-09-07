var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //write click event for submitting search query
        'click .search': 'submitSearch'
    },

    initialize: function() {
        //make sure to include listenTo's for adding videos and render function

        // this.$searchInput = this.$('#search-input');
        this.$mainvideo = this.$('#main-video')
        var $search = this.$('#search-input').val();
        var videosCollection = new VideosCollection()
        videosCollection.changeUrl($search);
        
    },

    submitSearch: function () {       
        //var video = this
        // console.log(videosCollection)
       
        var modelsArray = this.model.attributes.videos.models;

        initialize();
        //console.log(modelsArray)
        for (let i = 0; i < modelsArray.length; i++) {
           console.log(this)
            video.title = this.model.attributes.videos.models[i].attributes.title;
            video.description = this.model.attributes.videos.models[i].attributes.description;
            video.thumbnail = this.model.attributes.videos.models[i].attributes.thumbnail;
            video.videoId = this.model.attributes.videos.models[i].attributes.videoId;
           
            this.model.get('videos').addVideo(
                video.title, 
                video.description,
                video.thumbnail,
                video.videoId
            ); 
        }

      
        //console.log(this.model)    //parameters here need to be this.$inputs etccc)
    },
   

    renderPage: function () {

    },
    

    // write viewVideo function
    viewVideo: function () {

    },

    //write renderVideo function
    renderMainVideo: function (video) {
        var mainVideoView = new MainVideoView({model: video});
        this.$mainvideo.append(mainVideoView.render().el);
    }
})

// var appView = new AppView();