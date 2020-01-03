//Collection that is received by the api call. 
//Provides the user a default video collection on page load 
var VideoCollection = Backbone.Collection.extend({
    searchedVideo: 'Celebrity Jeopardy!: Robin Williams, Catherine Zeta-Jones &amp;',
    model: VideoModel,
    url: function () {
        var myApiKey = 'AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk'
        var otherApiKey = 'AIzaSyCu1okWlNecCAAqGlLnb6MUdaqd8XZVxbU'
        return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + `${this.searchedVideo}` + '&type=video&key=' + otherApiKey
    },

    //when the currentSearchTerm is updated in the model, it 
    //triggers this function to refetch based on that term
    searchVideo: function (currentSearchTerm) {
        console.log(currentSearchTerm)
        this.searchedVideo = currentSearchTerm;
        this.fetch({ reset: true })
    },


    // This loops through and returns specific items we need from the response 
    parse: function (response) {
        console.log('repsonse', response)
        var videos = []
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            videos.push(
                {
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnails: item.snippet.thumbnails.high,
                    id: item.id.videoId,
                    selected: false
                }
            )
        }
        console.log('response in videocollection.js', videos)
        return videos

    },

    //The currentVideo that is set in the model is passed to this function which
    //re-fetches by the title of the video that was clicked
    updateMainVideoOnClick: function (currentVideo) {
        this.searchedVideo = currentVideo.attributes.id
        console.log('currentVideo in updateMainVideoOnClick', currentVideo)
        this.fetch({ reset: true })
    }


});
