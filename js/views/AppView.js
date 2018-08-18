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

    this.listenTo(this.VideosCollection, 'change', this.renderAll)

  },


  //add all videos in videoscollection to page all at once
  renderAll: { function() {
    this.model.get('videos').each(
      function(m){
      $('.related-video-list').append(this.render().el);
    }
    )}
  }

//event --> when the search button is clicked --> video list is created

  //
  // events: {
  //   'click .search-btn': 'fetchVideos',
  // },
  //
  //
  // }

});
