const APIKey = 'AIzaSyAwCSZgkgbJ98nIxRAbxjIROi7QzKlrCvc';

const baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key='

const VideoCollection = Backbone.Collection.extend({
  url: baseURL + APIKey,

  model: VideoModel
})