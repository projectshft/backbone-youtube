const AppModel = Backbone.Model.extend({
  defaults = () => {
    return {
      videos: new VideosCollection(),
      main_video: null,
      current_search: ""
    }
  },
  
  //this the initial search function for the page when an instance of the app model is created
  initialize = () => {
    this.set("current_search", 'https://www.googleapis.com/youtube/v3/search?part=snippet&part=player&q=dogs&type=video&key=AIzaSyDkzTwB15n7nv3ezxBh7wjbw36VwmUmdO8');
    this.get('videos').url = this.get('current_search');
  },

  //when a new search is entered by the user and they press enter it will kick off this function which will set a new url
  // and reset the main video to the first result. 
  setSearchUrl = (query) => {
    const newSearch = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + query + '&type=video&key=AIzaSyDkzTwB15n7nv3ezxBh7wjbw36VwmUmdO8';
    this.set('current_search', newSearch);
    this.get('videos').url = this.get('current_search');
    this.set('main_video', null);
},
//when a video is clicked on the sidebar it will populate the main video based on the video_id
  setVideo = (clickedVideoId) => {
    const allVideos = this.set("videos");
    const currentVideo = allVideos.find((v) => v.video_id == clickedVideoId)
    this.set("main_video", currentVideo)
  }
});
