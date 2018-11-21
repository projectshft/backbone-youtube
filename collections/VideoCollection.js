var VideoCollection = Backbone.Collection.extend({
  url: "",
  model: VideoModel,
  selectedVideo: 0,
  parse: function(response) {
    return response.items.map(function (v) {

     return {
       title: v.snippet.title,
       description: v.snippet.description,
       id: v.id.videoId,
       thumbnail: v.snippet.thumbnails.default.url
     }
   })
 },
 fetchQuery: function(query) {
   if(!query) {
     alert("You must enter a valid search term in the box");
   } else{
     query.replace(" ","+");
   this.url = "https://www.googleapis.com/youtube/v3/search?&key=AIzaSyA9Oln71SfBsS8kZ0UxEO_gP75raEGoiMs&part=snippet&chart=mostpopular&type=video&q=" + query;
   this.fetch({ reset: true });
 }
}
})
