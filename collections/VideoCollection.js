let VideoCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Nobel+physic+prize+2019&type=video&videoDefinition=high&key=AIzaSyCOHlABqzocZoOxz8K2WjccJI31oHfA824`,

  model: VideoModel,

  parse: function (response) {
    return response.items.map((item) => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description
      }
    });
  },

  retrieveVideos: function (keyword) {
    debugger;
    keyword = keyword.split(' ').join('+')
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${keyword}&type=video&videoDefinition=high&key=AIzaSyCOHlABqzocZoOxz8K2WjccJI31oHfA824`;
    console.log(this.fetch({reset: true}));
  }

  
});