var AppView = Backbone.View.extend({
  initialize: function(model){
    this.model = model;
    //console.log("Here is my appModel");
    //console.log(this.model);
    this.listenTo(this.model.currentVideo, "change", this.render);
    $("#search").on("click", this.search.bind(this));
  },
  events: {

  },
  search: function(){
    var query = $("#search-term").val().trim().split(" ").join("+");
    this.model.getVideos(query);
  },
  render: function(){
    //check for child views, make them if they don't exist, updae them if they do
    if(!this.mainVideoView){
      this.mainVideoView = new MainVideoView(this.model.currentVideo);
    }
    else {
      this.mainVideoView.model = this.model.currentVideo; 
    }
    if(!this.sidebarView){
        this.sidebarView = new SidebarView(this.model.videos);
    }
    else{
      this.sidebarView.videos = this.model.videos;
    }
    this.mainVideoView.render();
    this.sidebarView.render();
    return this;
  }


})
