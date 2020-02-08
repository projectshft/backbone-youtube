var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null,

      url:'',

    };
  },

  //need to set current_video to the first video on the list
  getFirstVideo: function() {
    let curVideo = this.toJSON().videos.models[0];//videos.at(0).toJSON();
    console.log(curVideo);
    this.set('current_video', curVideo);

  },

  switchVideo: function (id) {
    let allVideos = this.get('videos');
    console.log(id);
    let currentVideo = allVideos.findWhere({ id: id });
    this.set('current_video', currentVideo);
  },

});