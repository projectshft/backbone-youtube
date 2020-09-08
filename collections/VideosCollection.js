var VideosCollection = Backbone.Collection.extend({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=AIzaSyAxMNbDRLIbzI-s1zAqPGCnPYddrW7s1p8`,
    model: VideoModel,

    parse: function(response) {
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

            var modelsHere = Object.assign({title: title, description: description, thumbnail: thumbnail, videoId: id}, item);
            return this.models.push(modelsHere)
        }, this);
    },

    // changeUrl: function(search) {
    //     // this.__proto__.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyAxMNbDRLIbzI-s1zAqPGCnPYddrW7s1p8`
        
    // }
})

// videosCollection = new VideosCollection({parse: true});
// console.log(videosCollection);

  /////Look at video ID and how to use it to dynamically add the videos