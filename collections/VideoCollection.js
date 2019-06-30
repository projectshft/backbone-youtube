var VideoCollection = Backbone.Collection.extend({
    //url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=buddhism&type=video&key=AIzaSyCPPmlPfkv3U89LcDYIMstVbhT0ZN7MNPg',

    //url: '', 

    model: VideoModel,

    addVideo: function (title, description, videoId, thumbnail) {
        this.add({
            title: title,
            description: description,
            videoId: videoId,
            thumbnail: thumbnail
        }, { wait: true });
    },

    parse: function (response) {
        var videoArray = response.items;
        console.log(videoArray);
        console.log(response);

        //return response.items; 
        return response.items.map(function (b) {
            console.log(b.snippet.title, b.snippet.description, b.id.videoId, b.snippet.thumbnails.default.url);
            return {
                title: b.snippet.title,
                description: b.snippet.description,
                videoId: b.id.videoId,
                thumbnail: b.snippet.thumbnails.default.url
            };
        });
    }
}); 