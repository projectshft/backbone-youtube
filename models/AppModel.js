const AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      //appmodel needs the videocollection
      videos: new VideosCollection(),
      // playing video with the videoId
      playing_video: null
    }
  },
  initialize: function () {
    this.get("videos").fetch();
  },

  //function for playing video based on the videoId
    setPlayingVideo: function (id) {
    const playingVideo = this.get("videos").findWhere({ videoId: id });
    this.set("playing_video", playingVideo);
  },
});
