var SideVideoView = Backbone.View.extend({


events: {
  //when user clicks a sidebar video the clickedSideVideo funcion is run
  'click .related-video': 'clickedSideVideo',
},
  model: VideoModel,

  template: Handlebars.compile($('#column-videos-template').html()),

  clickedSideVideo: function() {
    //store the clicked on video and the first video of the array in variables
    var clickedVideo = this.model;
    var mainVideo = appModel.get('videos').models[0];
    //loop through the collection of videos and if video 'i' is the same as the clicked on video store the value of i
    for (var i = 0; i < appModel.get('videos').models.length ; i++) {
      if (clickedVideo.cid == appModel.get('videos').models[i].cid ) {
        var clickedVideoPosition = i;
      }
  }
  //swapping index places of the first video in the area and the clicked on video's spot in the array
  appModel.get('videos').models[0] = clickedVideo;
  appModel.get('videos').models[clickedVideoPosition] = mainVideo;

//re-render the videos
//I had to make a reference to the appViews function because I had difficulty haven't it render any other way
  appView.renderMain();

  },



  render: function () {

    this.$el.html(this.template(this.model.attributes));


    return this;
  }
});
