var VideoModel = Backbone.Model.extend({
defaults: {
  id: '',
  // thumbnail: '',
  // title: '',
  // description: ''
},

urlRoot: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ&q=",



});