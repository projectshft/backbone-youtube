var AppModel = Backbone.Model.extend({
    defaults: function() {
        return {
            videos: new VideosCollection(),

            current_video: null

        };
    },

    
    updateCurrentVideo: function(id) { 
        var allVideos = this.get('videos');
        var currentVideo = allVideos.findWhere({ _id: id});

        this.set('current_video', currentVideo);
    },

    

    
});


//API key = 

//Sample request URL = https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=SEARCH_TERM_HERE&type=video&videoEmbeddable=true&key=AIzaSyCzOpDEiGvKbh687SDR3qDRwKWsbnqKCDU
//<iframe width="560" height="315" src="https://www.youtube.com/embed/ {{ id }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>