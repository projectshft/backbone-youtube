//data fetch should be done in collection
//https://www.googleapis.com/youtube/v3/search?key={{your api key}}&part=snippet&type=video&q={{ your search query }}
//api key: AIzaSyAE8DX14tWr8SRSxz38vzGn5WhbFCd8n_M
//collection representing the sidebar of video recommendations

//hardcode first and get dynamic data after this works
var VideoCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAE8DX14tWr8SRSxz38vzGn5WhbFCd8n_M&part=snippet&type=video&q=",
  model: VideoModel,


  parse: function (response) {
    _.each(response.items, function(item, index) {
      var videoModel = new this.model();
      videoModel.set('video_url', item.id.videoId);
      videoModel.set('image_url', item.snippet.thumbnails.default.url);
      videoModel.set('title', item.snippet.title);
      videoModel.set('description', item.snippet.description);
      this.push(videoModel);
      }
    );
    return this.models;
  }

});

// videoSearch.url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAE8DX14tWr8SRSxz38vzGn5WhbFCd8n_M&part=snippet&type=video&q=dogs";
// videoSearch.fetch();
