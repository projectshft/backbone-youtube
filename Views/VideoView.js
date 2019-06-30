var VideoView = Backbone.View.extend({

events: {
  'click .row': 'clicked'
},
  model: VideoModel,

initialize: function() {
    appModel.on('sort', this.tester )
  },

  tester: function () {
    console.log('');
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
  appModel.get('videos').models[0] = clickedVideo;
  appModel.get('videos').models[clickedVideoPosition] = mainVideo;



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
