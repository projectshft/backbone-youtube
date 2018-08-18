var VideoCollection = Backbone.Collection.extend({
  urlRoot: "https: www.googleapis.com/youtube/v3/search?key=AIzaSyBkCxcdQOwxQovx01IjtciRbvZtE-XKmV4&part=snippet&type=video&q=",
  parse: function (response){
    video: response.items[0].videoId
  }

})
