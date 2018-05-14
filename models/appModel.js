var AppModel = Backbone.Model.extend({
  defaults: function() {
    return{
      videos: new VideosCollection(),
      playingVideo: null,
      query: ''
    };
  },

  initialize: function(){
    this.on('change:query', this.passQueryToCollection);
    this.listenTo(this.get('videos') ,"reset", this.setCurrentVideo);
  },

  passQueryToCollection: function(){
    this.get('videos').fetchNewQuery(this.get('query'));
  }
});
