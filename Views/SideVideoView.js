var SideVideoView = Backbone.View.extend({

  tagName: 'li',

  className: '.side-video',

  events: {
    //when user clicks a sidebar video the clickedSideVideo funcion is run
    'click .related-video': 'clickedSideVideo',
  },

  //MAKE A CLICK

    model: VideoModel,

    template: Handlebars.compile($('#column-videos-template').html()),

    //NEED TO FIX THIS LOGIC SO THAT I AM ONLY CALLING FUNCTIONS TO SWITH VIDEOS
    clickedSideVideo: function() {
      //set the side videos 


      //store the clicked on video and the first video of the array in variables
      var clickedVideo = this.model;

      appModel.setMainVideo(clickedVideo);
      var mainVideo = appModel.get('mainVideo');
      //loop through the collection of videos and if video 'i' is the same as the clicked on video store the value of i
      for (var i = 0; i < appModel.get('videos').models.length ; i++) {
        if (clickedVideo.cid == appModel.get('videos').models[i].cid ) {
          var clickedVideoPosition = i;
        }
    }
      //EXHIBIT A 
      appModel.swapMainAndSideVideo(appModel.get('videos').models[clickedVideoPosition], mainVideo)
      // appModel.get('videos').models[clickedVideoPosition] = mainVideo;
      

    //re-render the videos
    //I had to make a reference to the appViews function because I had difficulty haven't it render any other way
      appView.renderVideos();
    },

    render: function () {

      this.$el.html(this.template(this.model.attributes));
      return this;
    }
});
