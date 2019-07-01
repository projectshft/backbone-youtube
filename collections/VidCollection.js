var VidCollection = Backbone.Collection.extend({
  model: VidModel,

  // puts the search input from the user into a URL for the API. only returns 6 videos
  fetchVids: function(searchQuery){
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchQuery}&type=video&key=AIzaSyDlV5WhGmdnkwPaMadx9_CX7QJpLCauAfE`
    this.fetch({reset: true});
  },

  // gets response from API and parses the info needed for VidModel.

  parse: function(response){
    if(response.items[0]){
      return response.items.map(vid => ({
        id: vid.id.videoId,
        title: vid.snippet.title,
        thumbnail: vid.snippet.thumbnails.medium.url,
        description: vid.snippet.description
      }));
    } else {
      alert('No results, Try a different search.');
      location.reload();
    }
  }

});
