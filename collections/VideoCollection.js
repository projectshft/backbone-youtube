var VideoCollection = Backbone.Collection.extend({

    model: VideoModel,

    parse: function (response) {

        // Get relevant information from items (videos) array in JSON response with map method 
        // (using "decode" to convert html entities to symbols). 
        return response.items.map(function (b) {
            return {
                title: he.decode(b.snippet.title),
                description: he.decode(b.snippet.description),
                videoId: b.id.videoId,
                thumbnail: b.snippet.thumbnails.default.url
            };
        });
    }
}); 