// This is a collection of Video Models
// This is where the data is retrieved from th Youtube API
var VideosCollection = Backbone.Collection.extend({

    url: '',

    model: VideoModel,

    parse: function (response) {
        console.log( response.items.map(function(arrayItem) {
            return {
                videoID: arrayItem.id.videoID,
                title: arrayItem.snippet.title,
                description: arrayItem.snippet.description,
                thumbnailURL: arrayItem.snippet.thumbnails.default.url,
            }
        }))
    },

    findVideos: function(query) {
        console.log('getting videos');
        this.url = config.urlFunc() + `${query}`;
        this.fetch({reset: true});
    }

});