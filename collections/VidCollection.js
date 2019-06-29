var VidCollection = Backbone.Collection.extend({
  model: VidModel,

  // puts the search input from the user into a URL for the API. only returns 6 videos
  fetchVids: function(searchQuery){
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchQuery}&topicId=%2Fm%2F05z1_&type=video&key=AIzaSyDlV5WhGmdnkwPaMadx9_CX7QJpLCauAfE`
    this.fetch({reset: true});
  },

  // gets response from API and parses the info needed for VidModel.

  parse: function(response){
    if(response.items[0]){
      return response.items.map(vid => ({
          thumbnail: vid.snippet.thumbnails.medium.url,
          title: vid.snippet.title,
          id: vid.id.videoID,
          description: vid.snippet.description
      }));
    }
  }

});
