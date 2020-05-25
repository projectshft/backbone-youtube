var VideosCollection = Backbone.Collection.extend({
  
  model: VideoModel,

  /* URL explanation:
   > the 'search?' part of the url specifies that we want a result that matches a
     search parameter
   > the 'part=snippet' returns an object that contains the details of the search
     (title, description, thumbnail)
   > 'max results' is set at 4 because we want to have 4 videos in our collection
     to display on the page, this may change based on extensions
   > 'q=' is where we put our search input variable, it is set to dogs so we have
     an inital search to show on page load
   > 'type' is set to video so we only get video back and not playlists or channels
   > 'videoEmbeddable is true because we want to filter our response to only videos
     that we can embed'  */

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyAEjf7hDATr-O7ilGfzojLtj3VbsiFw9r8',
  


  /* Here we parse the api response into an array (collection) of video models
     (objects). The actual videos we want are in an array in the response called
     'items', so that why we're mapping response.items. The properties of the
     videoModel are selected based only on the info we need from the response,
     using the same keys as the handlebars template variables  */
  parse: function(response) {
    
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

/*var ScheduleCollection = Backbone.Collection.extend({

    getResults: function () {

        var self = this;

        this.fetch({
            reset: true,
            success: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('successOnFetch');
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');
            }
        });
    }
 };

var ScheduleView = Backbone.View.extend({

    initialize: function () {

        this.listenTo(this.collection, 'successOnFetch', this.handleSuccess);
        this.listenTo(this.collection, 'errorOnFetch', this.handleError);
    },

    handleSuccess: function (options) {
        // options will be any options you passed when triggering the custom event
    },

    handleError: function (options) {
        // options will be any options you passed when triggering the custom event
    }
};

var scheduleCollection = new ScheduleCollection();
var scheduleView = new ScheduleView({ collection: scheduleCollection });
scheduleCollection.getResults();

*/









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



