//js/views/AppView


var AppView = Backbone.View.extend({
  //static html - bind to existing skeleton of the App already present
  el: $('body'),

  events: {'click .search-btn':' populateTheNewVideosCollection'},

  //at initialize, bind to the relevant events on the 'Videos' collection when Items are added or changed
  initialize : function(){
    this.$mainVideo = this.$('mainVideo');

    //keeping this listen function here now, but not yet using it because it throws errors - needs to be fixed
    //this.listenTo(this.model.get('videos'), 'change', this.renderVideo)

    //invoke renderVideo function when program initializes
    this.renderVideo();

    // this.fetchTheVideos();
  },


/* ************************************ */

//appModel.videos returns undefined in console

  // fetchTheVideos: function() {
  //   this.model.get('videos').set('url', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0EafJFEfzx7pWml4jkg9kLbdRJT0sFnM&part=snippet&type=video&q=dogs');
  //   this.model.get('videos').fetch();
  // },
/* ************************************** */

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

  //renderVideo is invoked in the AppView's initialization function above and appends a new instance of the videoView to the page using video model to source the attributes used in the template.
  renderVideo: function () {
    var videoView = new VideoView({model : Video});
    this.$mainVideo.append(videoView.render().el);
  }

});
