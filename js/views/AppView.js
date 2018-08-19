//js/views/AppView

var AppView = Backbone.View.extend({
  //static html - bind to existing skeleton of the App already present
  el: $('body'),

  //at initialize, bind to the relevant events on the 'Videos' collection when Items are added or changed
  initialize : function(){
    this.$mainVideo = this.$('mainVideo');

    //keeping this listen function here now, but not yet using it because it throws errors - needs to be fixed
    //this.listenTo(this.model.get('videos'), 'change', this.renderVideo)

    //invoke renderVideo function when program initializes
    this.renderVideo()

  },

  //renderVideo is invoked in the AppView's initialization function above and appends a new instance of the videoView to the page using video model to source the attributes used in the template.
  renderVideo: function () {
    var videoView = new VideoView({model : Video});
    this.$mainVideo.append(videoView.render().el);
  }

});
