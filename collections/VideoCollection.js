let VideoCollection = Backbone.Collection.extend({
  // initialize with sample 
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Nobel+physic+prize+2019&type=video&videoDefinition=high&key=AIzaSyCPBywuySO9l31TzVtnP3ihP3E3n--ZsCE`,

  model: VideoModel,

  // parse results for model
  parse: function (response) {
    return response.items.map((item) => {
      return {
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.default.url,
        title: item.snippet.title,
        description: item.snippet.description,
        selected: false
      }
    });
  },

  retrieveVideos: function (keyword) {
    keyword = keyword.split(' ').join('+')
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${keyword}&type=video&videoDefinition=high&key=AIzaSyCPBywuySO9l31TzVtnP3ihP3E3n--ZsCE`;
    this.fetch({reset: true});
  },

  replaceMainVideo(id) {
    let model = this.get(id);
    let modelIndex = this.models.indexOf(model);
    (this.models).unshift((this.models).splice(modelIndex,1)[0]);
    this.models[0].set('selected', !this.models[0].get('selected'));
  }
  
});