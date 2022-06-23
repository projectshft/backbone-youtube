var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
     videos,
    }
  }
});

var appModel = new AppModel()

var VideosCollection = Backbone.Collection.extend({
  model: AppModel,
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyDkiczzrnArBHYPLDSsfeCDbKVsJxALcZc",
});

var AppView = Backbone.View.extend({
  template: Handlebars.compile($('#side-videos-template').html()),
  
  events: {    
    'click .btn': 'renderVideos'
  },

renderVideo: function () {
  //console.log('click');
  this.model.get('videos').each(function (AppModel) {
    var currentVideoView = new AppView({ model: AppModel });
      this.$('.video-container').append(currentVideoView.render().el);
}, this);
 },
});

var appView = new AppView();
   
var videos = new VideosCollection();
  videos.fetch({
   success: function () {
     console.log(videos.models);
   }
  });