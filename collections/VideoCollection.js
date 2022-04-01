
var VideoCollection = Backbone.Collection.extend({
  
  url: '',

  searchVideo: function(userInput){
    
    this.updateUrl(userInput);
    this.fetch();
    },
  
  updateUrl: function (userInput) {
    
    var newUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&type=video&videoEmbeddable=true&key=AIzaSyCuZkTkLT7pAbGYodRnTSHgzDYtty53nwU`;
    this.url = newUrl;

  },
  
  model: VideoModel,
  
  parse: function(data) {
    return data.items.map((video) => {
      return {
        url: video.snippet.thumbnails.high.url,
        title: video.snippet.title,
        describtion: video.snippet.description,
        id: video.id.videoId
      };
    });
  }
});





