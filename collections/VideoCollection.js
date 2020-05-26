//This will be the collection of models (videos) from the server. It needs to be displayed in the right pane.


var VideoCollection = Backbone.Collection.extend({
  urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + {{search-term}} + '&key=AIzaSyDFf_6NTONo5rmGPHmJGMnpLqkXzS8tm7g',
});
