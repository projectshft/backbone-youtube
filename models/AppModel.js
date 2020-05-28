var AppModel = Backbone.Model.extend({
  
  defaults: function () {
    return {
      videos: new VideoModel(),
      videoList: new VideoListCollection(),
      userSearchQuery: ''
    }
  },

  //set new URL on videoList collection with new userSearchQuery
  updateReviewsURL: function() {
  
    this.get('videoList').url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.get('userSearchQuery')}&type=video&key=AIzaSyCXEKB0jRvSYo_YL9WUOYWsn8-VXWg7JUQ`;

    //fetch new API data from YouTube
    this.get('videoList').fetch({ reset: true })
  }
});