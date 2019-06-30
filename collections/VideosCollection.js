var VideosCollection = Backbone.Collection.extend({
  url: `ttps://www.googleapis.com/youtube/v3/
  search?maxResults=10&part=snippet
  &fields=items(id(videoId),snippet(title,description,thumbnails(default(url))))&type=video&key=AIzaSyCZJr48wGNGhUN7Ki8HLbYO4jN2AwqG0l8&q=`,

  model: VideoModel,

  addVideos: function (title, description, id) {
    this.add({

    })
  },

  parse: function (response) {
    console.log('we made it to parse')
  },

  query: 'funny dogs'
});
