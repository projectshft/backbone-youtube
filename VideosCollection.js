var VideosCollection = Backbone.Collection.extend({
  
  model: VideoModel,

  /* URL explanation:
   > the 'search?' part of the url specifies that we want a result that matches a
     search parameter
   > the 'part=snippet' returns an object that contains the details of the search
     (title, description, thumbnail)
   > 'max results' is set at 4 because we want to have 4 videos in our collection
     to display on the page, this may change based on extensions
   > 'q=' is where we put our search input variable, it is set to dogs so we have
     an inital search to show on page load
   > 'type' is set to video so we only get video back and not playlists or channels
   > 'videoEmbeddable is true because we want to filter our response to only videos
     that we can embed'  */

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyAEjf7hDATr-O7ilGfzojLtj3VbsiFw9r8',
  


  /* Here we parse the api response into an array (collection) of video models
     (objects). The actual videos we want are in an array in the response called
     'items', so that why we're mapping response.items. The properties of the
     videoModel are selected based only on the info we need from the response,
     using the same keys as the handlebars template variables  */
  parse: function(response) {
    
    return response.items.map(function(item) {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        videoURL: 'https://www.youtube.com/embed/' + item.id.videoId,
        thumbnailURL: item.snippet.thumbnails.default.url
      }
    });
  }
})

