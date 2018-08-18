//js/views/AppView

var AppView = Backbone.View.extend({
  //static html - bind to existing skeleton of the App already present
  el: $('body'),

  //at initialize, bind to the relevant events on the 'Videos' collection when Items are added or changed
  initialize : function(){
    //do i need to bind to input here so i can empty it when search is done?:
    //this.$input = input...

    //bind to main-video content for reference when changing it
    this.$mainVideo = this.$('.main-video');
    //bind to relatedVideoList for reference when changing it.
    this.$relatedVideoList = this.$('.related-videos')

    this.listenTo(VideosCollection, 'add', this.renderVideo)

  },

  logVideos:
    function(){
    this.model.get('videos').each(function () { console.log(videos.toJSON());
  });
},



  //event --> when the search button is clicked --> video list is created

    // events: {
    //   'click .search-btn':
    // },


    renderVideos: function () {
      this.model.get('videos').each(function (m) {
        this.renderVideo(m);
      }, this);
    },

    renderVideo: function (review) {
      var videoView = new VideoView({ model: review });
      this.$('.related-video-list').append(videoView.render().el);
}


});
