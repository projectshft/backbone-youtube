var SearchModel = Backbone.Model.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&type=video&videoDefinition=high&key=AIzaSyDan5m7YffS-93Vb_8EzwBONvaGqtkmHJo&q=",
  parse: function(response){
    return response;
  }
});
