var SidebarView = Backbone.View.extend({
  initialize: function(collection){
    this.videos = collection;
  },
  render: function(){
    this.$el.empty();
    console.log("sidebar element");
        this.setElement($("#sidebar"));
        console.log(this.$el);
    for(var i=1;i<this.videos.length;i++){ //starting at 1 because the first element goes to mian video view
      var view = new SideVideoView(this.videos.at(i));
      this.$el.append(view.render().$el.html());
    }

  }
});
