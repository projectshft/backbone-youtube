const APIKey = 'AIzaSyDjJi6MjDGTzKELCtaLrcbhcnAMdM_2OYY';

const baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key='

const staticSearchValue = '&q=chess'

const VideoCollection = Backbone.Collection.extend({
  url: baseURL + APIKey,

  model: VideoModel
})