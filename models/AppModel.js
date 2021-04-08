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

  //Sets the current Video attribute. This method could either be called from a new search taking place or from the user clicking one of the videos on the side bar
  setCurrentVideo: function (input) {
    //If this method is called from the user clicking a video on the sidebar then input will a string of the video's id. Otherwise if the method is called from a new search taking place then input will be the new videoCollections
    if(typeof input === 'string') {
      this.set("currentVideo", this.get("videos").where({id: input})[0])
    } else {
      this.set("currentVideo", input.models[0]);
    }
    
  },

  //Loads data to test rather than fetching data from server
  loadData: function(data) {
    //Run data through the video collections parser
    data = this.get("videos").parse(data);

    //Run each object through the video model parser
    var newVideoModel = new VideoModel();
    data = data.map(function (obj) {
      return newVideoModel.parse(obj);
    })

    this.get("videos").add(data);
  }
  
});