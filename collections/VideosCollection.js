var VideosCollection = Backbone.Collection.extend({
    model: VideoModel,
    _apiKey: "AIzaSyCRSDPAKwQLiuFk2I1HImjpgVj2aLQ9LI0",
    _searchTerm: '',
    url: function () {
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&q=${this._searchTerm}&type=video&key=${this._apiKey}`;
    },
    searchVideos: function (searchTerm) {
        //set internal search term so that url can build properly on fetch
        this._searchTerm = searchTerm;
        this.fetch({ reset: true });
    },
    parse: function (response) {
        if (response.items) {
            console.log('search response array:');
            console.log(response.items);

            return response.items.map(function (v) {
                return {
                    //using Ramda pathOr here to deep search response
                    //would rather use _.get on Lodash but lodash conflicts with underscore
                    videoId: R.pathOr('', ['id', 'videoId'], v),
                    title: R.pathOr('', ['snippet', 'title'], v),
                    description: R.pathOr('', ['snippet', 'description'], v),
                    thumbnail: R.pathOr('', ['snippet', 'thumbnails', 'default', 'url'], v),
                    channelTitle: R.pathOr('', ['snippet', 'channelTitle'], v)
                }
            })
        }
        console.log('items was falsy')
        return {};
    }
});