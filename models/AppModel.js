var AppModel = Backbone.Model.extend({
    _apiKey: "AIzaSyCRSDPAKwQLiuFk2I1HImjpgVj2aLQ9LI0",
    url: function () {
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&q=${this.get('searchTerm')}&type=video&key=${this._apiKey}`;
    },
    defaults: function () {
        return {
            searchTerm: '',
            videos: new VideosCollection(),
            current_video: null
        };
    },
    searchVideos: function () {
        this.fetch();
    },
    parse: function (response) {
        console.log(response);
    }
});