var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {

      videos: new VideoCollection(),

      current_video: null,
    }
  },
  // getVideos: function(){
  //   console.log(this.attributes);
  // }
});
