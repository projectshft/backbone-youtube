var VideosCollection = Backbone.Collection.extend({
  
  model: VideoModel,

  // my api key: AIzaSyDEKhHoXpSZBx-Gyukvza7t2E5ZRZqfr5g
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyDEKhHoXpSZBx-Gyukvza7t2E5ZRZqfr5g',


  parse: function(response) {
    console.log(response);
    return response.items.map(function(item) {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        videoURL: 'https://www.youtube.com/embed/' + item.id.videoId,
        thumbnailURL: item.snippet.thumbnails.default.url
      }
    });
  }


})



/*
Search seems to be the method I want to do...
GET https://www.googleapis.com/youtube/v3/search


Optional Parameters

type	string
The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist.

Acceptable values are: I WANT VIDEO
channel
playlist
video


videoEmbeddable	string
The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.

Acceptable values are:
any – Return all videos, embeddable or not.
true – Only retrieve embeddable videos.


RESPONSE
{
  "kind": "youtube#searchListResponse",
  "etag": etag,
  "nextPageToken": string,
  "prevPageToken": string,
  "regionCode": string,
  "pageInfo": {
    "totalResults": integer,
    "resultsPerPage": integer
  },
  "items": [
    search Resource
  ]
}

*/



