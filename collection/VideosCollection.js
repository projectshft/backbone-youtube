var VideoCollection = Backbone.Collection.extend({
  urlRoot: "https: www.googleapis.com/youtube/v3/search?key=AIzaSyBkCxcdQOwxQovx01IjtciRbvZtE-XKmV4&part=snippet&type=video&q=" + $('#txtSearch').val(),
  parse: function (response){
    video: function(response){
      for(var i = 0; i < response.items.length; i++)
        var itemAttr = response.items[i];
        var searchId = itemAttr.id.videoID

    }
  }

})

var videoCollection = new VideoCollection();
