var VideosCollection = Backbone.Collection.extend({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=AIzaSyAxMNbDRLIbzI-s1zAqPGCnPYddrW7s1p8`,
    model: VideoModel,

    parse: function(response) {
        //console.log(response.items)
        return response.items.map(function(item) {
            if (item.id.videoId) {
                var id = item.id.videoId
            } else {
                var id = item.id.channelId;
            };
            //console.log(item)
            if (item.snippet.description) {
                var description = item.snippet.description;
            } else {
                var description = 'No Description Available';
            };

            var title = item.snippet.title; 
            var thumbnail = item.snippet.thumbnails.default;
            //console.log(item)
            return Object.assign({title: title, description: description, thumbnail: thumbnail, videoId: id}, item);
        }, this);
    },

    // logging: function() {
    //     console.log(this)
    // },

    addVideo: function(title, description, thumbnail, videoId) {
        //console.log(this.models)
        
        // this.models.push({                       //////this sorta works
        //     title: title,
        //     description: description,
        //     thumbnail: thumbnail,
        //     videoId: videoId
        // });
    }
})

// videosCollection = new VideosCollection();
// console.log(videosCollection);

  /////Look at video ID and how to use it to dynamically add the videos