var VideoView = Backbone.View.extend({

events: {
  'click .row': 'clicked'
},
  model: VideoModel,

// initialize: function() {
//     this.listenTo(appModel.get('videos'),'add', this.tester )
//   },

  tester: function () {
    console.log('tester');
  },

  template: Handlebars.compile($('#column-videos-template').html()),

  clicked: function() {

    var clickedVideo = this.model;
    var mainVideo = appModel.get('videos').models[0];
    for (var i = 0; i < appModel.get('videos').models.length ; i++) {
      if (clickedVideo.cid == appModel.get('videos').models[i].cid ) {
        var clickedVideoPosition = i;
      }
  }
  // $('div').empty();

  appModel.get('videos').models[0] = clickedVideo;
  appModel.get('videos').models[clickedVideoPosition] = mainVideo;


  for (var i = 1; i < appModel.get('videos').models.length - 1; i++ ) {
    // if (appModel.get('videos').models[i] == appModel.get('videos').models[0]) {
    //
    //   this.$el.html(this.template(appModel.get('videos').models[i].attributes));
    // } else {
      // console.log('rendering side videos')
      var videoView = new VideoView( { model: appModel.get('videos').models[i] } );

      this.$el.append(videoView.render().el)
    // }
  }



  },


  // renderAgain = function() {
  //   console.log('test render')
  //   for (var i = 0; i < appModel.get('videos').models.length; i++ ) {
  //     if (appModel.get('videos').models[i] == appModel.get('videos').models[0]) {
  //       console.log(appView.el)
  //       appView.el.html(this.template(appModel.get('videos').models[i].attributes));
  //     } else {
  //
  //       var videoView = new VideoView( { model: appModel.get('videos').models[i].attributes } );
  //       $('.related-videos-container').append(videoView.render().el)
  //     }
  //   }
  //
  // }
  // renderAgain();

  // renderAgain: function() {
  //   console.log('test render')
  //   for (var i = 0; i < appModel.get('videos').models.length; i++ ) {
  //     if (appModel.get('videos').models[i] == appModel.get('videos').models[0]) {
  //       console.log('rendering main video')
  //       this.$el.html(this.template(appModel.get('videos').models[i].attributes));
  //     } else {
  //
  //       var videoView = new VideoView( { model: appModel.get('videos').models[i].attributes } );
  //       $('.related-videos-container').append(videoView.render().el)
  //     }
  //   }
  //
  // },


  render: function () {

    this.$el.html(this.template(this.model.attributes));


    return this;
  }
});
// this.model.get('videos').models[i].attributes
