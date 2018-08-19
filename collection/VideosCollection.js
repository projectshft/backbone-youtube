var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  urlRoot: "https: www.googleapis.com/youtube/v3/search?key=AIzaSyBkCxcdQOwxQovx01IjtciRbvZtE-XKmV4&part=snippet&type=video&q=" + $('#txtSearch').val(),
  parse: function (response){
      var videoArray = [];
      for(var i = 0; i < response.items.length; i++)
        var itemAttr = response.items[i];
        var videoProps = {
          id: itemAttr.id.videoID,
          title: itemAttr.snippet.title,
          descrip: itemAttr.snippet.description,
          urlImage: itemAttr.snippet.thumbnails.medium.url
        }
        videoArray.push(videoProps);
        return videoArray
    }

})

var newCollection = new VideoCollection();
newCollection.fetch();
