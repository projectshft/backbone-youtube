// const my_key = 'AIzaSyC9oT5w8cbYBUkRfg2_1uJZb2YsipMyVJY';
// const my_oauth = '747385519840-818000uhjd0sq32krt5jfl4dka24nrnj.apps.googleusercontent.com';

AppModel = Backbone.Model.extend({
  initialize: function(){
    this.setUrl(this.get('currentQuery'));
  },

  defaults: function(){
    return {
      videos: new VideosCollection(),
      currentVideo: null,
      currentQuery: 'Flight of the Conchords'
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