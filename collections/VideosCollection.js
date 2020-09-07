var VideosCollection = Backbone.Collection.extend({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=AIzaSyAxMNbDRLIbzI-s1zAqPGCnPYddrW7s1p8`,
    model: VideoModel,

    addVideo: function(search) {
        //console.log(this.model)
        this.fetch({
            title: title,
            description: description,
            thumbnail: thumbnail,
            videoId: videoId,
        }, {wait: true});   
    },

    parse: function(response) {
        //console.log(response.items)
        return response.items.map(function(item) {
            if (item.id.videoId) {
                var id = item.id.videoId
            } else {
                var id = item.id.channelId;
            };

            if (item.snippet.description) {
                var description = item.snippet.description;
            } else {
                var description = 'No Description Available';
            };

            var title = item.snippet.title; 
            var thumbnail = item.snippet.thumbnails.default;
            //console.log()
            return Object.assign({title: title, description: description, thumbnail: thumbnail, videoId: id}, item);
        }, this);
        
    }

})

// videosCollection = new VideosCollection();
// console.log(videosCollection);

  /////Look at video ID and how to use it to dynamically add the videos