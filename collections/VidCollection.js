var VidCollection = Backbone.Collection.extend({
  model: VidModel,

  // puts the search input from the user into a URL for the API. only returns 6 videos
  fetchVids: function(searchQuery){
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchQuery}&topicId=%2Fm%2F05z1_&type=video&key=AIzaSyDlV5WhGmdnkwPaMadx9_CX7QJpLCauAfE`
    this.fetch({reset: true});
  },


});
