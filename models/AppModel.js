var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      currentVideo: null,
    }
  },

  initialize: function () {
    this.listenTo(this.get("videos"), "update", this.setCurrentVideo)
  },

  setCurrentVideo: function (newVideos) {
    this.set("currentVideo", newVideos.models[0]);
  },

  //Loads data to test rather than fetching data from server
  loadData: function(data) {
    //Run data through the video collections parser
    data = this.get("videos").parse(data);
    //Run each array through the video model parser
    var newVideoModel = new VideoModel();
    debugger;
    data = data.map(function (obj) {
      return newVideoModel.parse(obj);
    })
    debugger;
    this.get("videos").add(data);
  }
  
});