//js/views/AppView


var AppView = Backbone.View.extend({
  //static html - bind to existing skeleton of the App already present
  el: $('body'),

  events: {'click .search-btn':'populateTheNewVideosCollection'},

  //at initialize, bind to the relevant events on the 'Videos' collection when Items are added or changed
  initialize : function(){
    this.$mainVideo = this.$('.main-video');
    this.$relatedVideosList = this.$('.related-videos-list')

    //keeping this listen function here now, but not yet using it because it throws errors - needs to be fixed
    //this.listenTo(this.model.get('videos'), 'change', this.renderVideo)

    //invoke renderVideo function when program initializes
    // this.renderVideo();

    this.listenTo(this.model.get('videos'), 'reset', this.renderAll )
  },

  populateTheNewVideosCollection: function(){
    this.model.get('videos').fetch({'reset': true});
    console.log(appModel.attributes.videos);
  },

  //renderAll is invoked in the AppView's initialization function above and appends a new instance of the videoView to the page using video model to source the attributes used in the template.
  // Add all items in the collection at once.
  //myCollection.each(function(model, index, [context]) {...});
  renderAll: function(){
    this.model.get('videos').each(function (m) {
    console.log(m);
    var videoView = new VideoView({model : Video});
    this.$relatedVideosList.append(videoView.render().el)
  }, this);
}

});
