var VideosCollection = Backbone.Collection.extend({
  //'searchTerm' arrives to the collection by the appView's 'fetchOnEnter' function
  url: function (searchTerm) {
    //Intended to generate a default search on load
    if (!searchTerm) {
      searchTerm = 'leafy seadragon';
    }
    //Processes a search term and create url. Return to appView's 'fetchOnEnter'
    //function to fetch from API.
    //TOFIX: Possibly send out the fetch from the collection?
    var searchTermTrimmed = searchTerm.trim().split(' ').join('%20');
    return (
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +
      searchTermTrimmed +
      '&type=video&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q'
    );
    //NOTE that creating a new url and sending it to API is functional
  },

  model: VideoModel,
  //This function adds hardcoded videos from main.js. The appView listens for 'add'events
  //and renders the videos
  addVideo: function (title, description, videoId, thumbnail, youtubeEmbedUrl) {
    this.add({
      title: title,
      description: description,
      videoId: videoId,
      thumbnail: thumbnail,
      youtubeEmbedUrl: youtubeEmbedUrl,
    });
  },

  
  parse: function (response) {
    //API response object is turned into an array
    var result = [response];
    //The results are further winnowed
    var cleanResult = result[0].items;
    // console.log(cleanResult);
    return cleanResult.map(function (video) {
      //Map function loops through the array; Object.assign assigns object properties 
      //from the API results
      return Object.assign({
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.default.url,
        youtubeEmbedUrl: 'https://www.youtube.com/embed/' + video.id.videoId,
      });
    });
  },
});
