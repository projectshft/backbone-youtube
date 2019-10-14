//Collection that is received by the api call. Provedes the user the first video when they come to the site 
var VideoCollection = Backbone.Collection.extend({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + 'batman' + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk',
    model: VideoModel,


// This function takes in the searched value 
    searchedVideo: function (videoSearch) {
        console.log(searchedVideo);
        this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + videoSearch + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk'
    },

  // This function parses through the repsonse data for the specific items we need   
    parse: function (response) {
       
        var videos = []
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            videos.push({ title: item.snippet.title, description: item.snippet.description, thumbnails: item.snippet.thumbnails.default, id: item.id.videoId})
        }
        console.log(videos)
        return videos     
        
    },
    
});
