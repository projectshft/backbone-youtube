
AppModel = Backbone.Model.extend({
  initialize: function(){
    this.setUrl(this.get('currentQuery'));
  },

  // Set on Initial Page loadup to please the user with Auburn Football highlights

  defaults: function(){
    return {
      videos: new VideosCollection(),
      currentVideo: null,
      currentQuery: 'Auburn Football'
    }
  },

  setCurrentVideo: function (videoId) {
    //check for current video assignment
    var currentVideo;
    var allVideos = this.get('videos');
    if(videoId === '0'){
      currentVideo = allVideos.at(videoId);
    } else {
      this.get('currentVideo').set('currentVideo', false);
      currentVideo = allVideos.findWhere({
        id: videoId
      });
    }

    currentVideo.set('currentVideo', true);
    this.set('currentVideo', currentVideo);

  },

  // Change the query upon search
  updateCurrentQuery: function (searchString) {
    
    this.set('currentQuery', searchString);
    
  },

  searchYoutube: function(){
    this.setUrl();
    this.get('videos').fetch({
      reset: true
    });
  },

  setUrl(){
    this.get('videos').updateUrl(this.get('currentQuery'));
  }
});