var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      currentVideo: null,
      currentSearchTerm: 'cats',
    }
  },

  initialize: function () {
    this.listenTo(this.get("videos"), "update", this.setCurrentVideo)
    //When line below is uncommented, completes an initial search so that the page will not be empty when user loads the page
    // this.get("videos").searchVideos(this.get("currentSearchTerm"))
  },

  //Update the current search term and call on the videos collection to search for new videos with that search term
  updateSearchTerm: function (searchTerm) {
    this.set("currentSearchTerm", searchTerm)
    this.get("videos").searchVideos(this.get("currentSearchTerm"))
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