var VideosCollection = Backbone.Collection.extend({
    url: '',
    model: VideoModel,

    updateUrl: function (search) {
        this.url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + search + "&type=video&videoEmbeddable=true&key=AIzaSyCzOpDEiGvKbh687SDR3qDRwKWsbnqKCDU";
    },

    
    
    parse: function (response) {
        var self = this;
        
        _.each(response.items, function(item, index) {
            var video = new self.model();

            video.set('_id', index);

            video.set('videoId', item.id.videoId);
            video.set('title', item.snippet.title);
            video.set('description', item.snippet.description);
            video.set('thumbnail', item.snippet.thumbnails.default.url);

            self.push(video);

        });
        console.log(this);

        return this.models;
    }   
        
    
    

});

