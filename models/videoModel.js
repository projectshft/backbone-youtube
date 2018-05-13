var VideoModel = Backbone.Model.extend({

  default: function(){
    return {
      videoId: "",
      title: "",
      description: "",
      thumbnailURL: ""
    }
  }

});
