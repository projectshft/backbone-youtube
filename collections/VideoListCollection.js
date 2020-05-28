var VideoListCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=red%20sox%20champions&type=video&key=AIzaSyCXEKB0jRvSYo_YL9WUOYWsn8-VXWg7JUQ',
  model: VideoModel,

  //parsing data from YouTube API - working
  parse: function (response) {
    // checking to see if search results have 0 results
    // sending message to user if 0 results found
    if (response.pageInfo.totalResults === 0) {
      alert(`No results from search. Try another search`)
    }
    
    return response.items.map(function (video) {
      return {
        videoId: video.id.videoId || null,
        videoThumbnail: video.snippet.thumbnails.default.url || null,
        title: video.snippet.title || null,
        description: video.snippet.description || null
      }
    });
  },
})
