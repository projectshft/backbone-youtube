  var VideosCollection = Backbone.Collection.extend({
    model: VideoModel,

    //function for dynamically setting the URL when the search field has enter pressed on it
    setURL: function(query) {
      this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=' +
      query + '&type=video&key=' + mykey
    },

    //Takes the API response and creates new video models and pushes them onto the Collection
    //Returns the models
    parse: function(response) {
      var self = this;
      _.each(response.items, function(videoItem) {
        var video = new self.model();
        video.set('title', videoItem.snippet.title);
        video.set('video_id', videoItem.id.videoId);
        video.set('description', videoItem.snippet.description);
        video.set('img_url', videoItem.snippet.thumbnails.default.url);
        self.push(video);
      })
      return self.models;
    }
  })
