var VideosCollection = Backbone.Collection.extend({
    url: '',

    model: VideoModel,

    getData: function (query) {
        this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=AIzaSyAchUgQAhNKXoa78jKqFaDhNdUVYR4vse0`,

        this.fetch({ reset: true });
    },

    parse: function (data) {
        console.log(data);
    }
});
