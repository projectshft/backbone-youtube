var AppModel = Backbone.Model.extend({
  // idAttribute: 'query',
  defaults: function () {
    return {
      videos: new VideoCollection(),

      // videoModel: new VideoModel(),
      // reset: false,

        // query: '',
      // current_video: null
      // defaults: {
      //   title: '',
      //   videoId: '',
      //   thumb: '',
      //   desc: ''
      // }

    }
  }
});
