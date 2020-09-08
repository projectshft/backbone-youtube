var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //write click event for submitting search query
        'click .search': 'submitSearch'
    },

    initialize: function() {
        //make sure to include listenTo's for adding videos and render function
        this.$mainvideo = this.$('#main-video')
        
    },

    submitSearch: function () {       
        this.$search = this.$('#search-input').val();
        // console.log(this.$search)
        var modelsArray = this.model.attributes.videos.models;
        //console.log(modelsArray.length)
    
        //console.log(modelsArray)
        for (let i = 5; i < modelsArray.length; i++) {
            console.log(this)
            this.title = this.model.attributes.videos.models[i].attributes.title;
            console.log(this.title)
            // this.description = this.model.attributes.videos.models[i].attributes.description;
            // this.thumbnail = this.model.attributes.videos.models[i].attributes.thumbnail;
            // this.videoId = this.model.attributes.videos.models[i].attributes.videoId;
           
            //console.log(this.title)
            // this.model.get('videos').addVideo(
            //     video.title, 
            //     video.description,
            //     video.thumbnail,
            //     video.videoId
            // ); 
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