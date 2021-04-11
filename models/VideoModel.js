var VideoModel = Backbone.Model.extend({
  defaults: {
      id: '',
      title: '',
      description: '',
      thumbnailUrl: '',
      videoUrl: 'https://www.youtube.com/embed/',
      previouslyViewed: false
  },

  parse: function (response) {
    //The location of the proper id is slightly different between a search for videos on basis of search term versus looking up a single id to find a video
    var videoId = response.id.videoId ? response.id.videoId : response.id;
    //Checks local storage to see if the user has seen the video before
    var hasSeenBefore = localStorage.getItem(videoId) ? true: false;
    return {
      id: videoId,
      title: he.decode(response.snippet.title),
      description: response.snippet.description,
      thumbnailUrl: response.snippet.thumbnails.default.url,
      videoUrl: `https://www.youtube.com/embed/${videoId}`,
      previouslyViewed: hasSeenBefore,
    }
  }
  
});