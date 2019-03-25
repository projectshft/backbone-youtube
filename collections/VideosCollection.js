var VideosCollection = Backbone.Collection.extend({

    url: '',

    fetchVideos: function(query) {

      this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=' +query+ '&key=AIzaSyBEG4ujnxDsiPYGHbN2S1hgQ-JSpWLOmdI';

      this.fetch({reset: true});
    },

    model: VideoModel,

    parse: function(response) {

        // If search is a long string of gibberish
        // Look for error in response from API, alert error to user
      if (response.items.length == 0) //console.log(response);
      {
        alert('Enter a valid search term')
      }

      return response.items.map(function (items){

        return{
          title: items.snippet.title,
          description: items.snippet.description,
          thumbnails: items.snippet.thumbnails.default.url,
          videoId: items.id.videoId
        }
      })
    }

  });
