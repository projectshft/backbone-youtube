var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //write click event for submitting search query
        'click .search': 'submitSearch'
    },

    initialize: function() {
        this.$searchInput = this.$('#search-input');
        this.$searchValue = this.$('#search-input').val();
        
        
        // video.title = '';
        // video.description = '';
        // video.thumbnail = '';
        // video.videoId = '';
        //console.log(video.videoId)
        //console.log(this.model.get('models'))
    },

    submitSearch: function () {
        // VideosCollection.addVideo(query)
       
        //var search = this.$('#search-input').val();
        var modelsArray = this.model.attributes.videos.models;
        var video = this
        //console.log(this)
        
        for (let i = 0; i < modelsArray.length; i++) {
            console.log(video)
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
    }
    // write initialize function here make sure to include listenTo's for adding videos and render function

    //write renderPage function

    // write viewVideo function

    //write renderVideo function
})

// var appView = new AppView();