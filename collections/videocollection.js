//Collection that is received by the api call. Provedes the user the first video when they come to the site 
var VideoCollection = Backbone.Collection.extend({
    searchedVideo: '',
    model: VideoModel,
    url: function (searchedVideo) {
        return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + `${this.searchedVideo}` + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk'
    },

    searchVideo: function (currentSearchTerm) {

        console.log(currentSearchTerm)
        this.currentSearchTerm = searchedVideo;
        this.fetch({ reset: true })
    },


    // This function parses through the repsonse data for the specific items we need   
    parse: function (response) {
        // console.log('repsonse', response)
        var videos = []
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            videos.push({ title: item.snippet.title, description: item.snippet.description, thumbnails: item.snippet.thumbnails.high, id: item.id.videoId })
        }
        console.log('response in videocollection.js', videos)
        return videos

    },

});
