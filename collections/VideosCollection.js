//Collection of videos returned by the youtube API
/* curl \
  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed */

  var VideosCollection = Backbone.Collection.extend({
    model: VideoModel


  })
