var VideoModel = Backbone.Model.extend({
  defaults: {
    videoId: '',
    title: '',
    description: '',
    thumbnail: '',
  },
  initialize: function(){
    console.log('video model initialized')
  }
})
var videoModel = new VideoModel();
