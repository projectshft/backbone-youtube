var VideosCollection = Backbone.Collection.extend({
  input: 'tacos',
  model: VideoModel,

  url: function () {
    return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${this.input}&type=video&key=AIzaSyD79hskr75Fwx5ZLAWOAEe8o2NNOgaS3uM`;
  },


  fetchVideos: function (userInput) {
    this.input = userInput;
    this.fetch();
  },

  parse: function (response) {
    console.log(response);
    response.items.forEach(function (video) {
      console.log(video);
      return {

      }
    })

  }
});