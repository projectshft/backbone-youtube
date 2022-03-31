let API_KEY = 'AIzaSyCHd0mgg00maYbK6w6fRP8iIBfqK6Jsmn4';

let VideosCollection = Backbone.Collection.extend({
    model: VideoModel,

    url: function() {
        return this.baseUrl
    },

    initialize: function(models, options) {
        this.baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${options.searchTerm}&type=video&videoEmbeddable=true&key=${API_KEY}`;
        // this.baseUrl = `www.test.com/q=${options.searchTerm}&type=video&videoEmbeddable=true&key=${API_KEY}`;
        console.log('videos collection was initialized');
        console.log(this.url());
    },

    parse: function(response) {
        console.log(response);
        
        let configuredResponse = response.items.map(function(vid) {
            return {
                id: vid.id.videoId,
                video_url: 'https://www.youtube.com/embed/' + vid.id.videoId,
                image_url: vid.snippet.thumbnails.default.url,
                title: vid.snippet.title,
                description: vid.snippet.description
            }
        })
        // return response.items.map(function(vid) {
        //     return {
        //         id: vid.id.videoId,
        //         video_url: 'https://www.youtube.com/embed/' + vid.id.videoId,
        //         image_url: vid.snippet.thumbnails.default.url,
        //         title: vid.snippet.title,
        //         description: vid.snippet.description
        //     }
        // })
        console.log(configuredResponse);
        console.log('response logged');
        return configuredResponse;
    }
});