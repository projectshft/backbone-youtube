var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: {
        title: '',
        id: '',
        description: '',
        thumbnail: ''
      },

      searchQuery: 'Michael Jordan Top 10 Plays of Career',

      current_video_queue: []
    }
  },

  initialize: function () {

    //If there is a reset event on the collection of videos, which will be triggered by a search query that sends back an array of 10 videos, then the set CurrentVideo function to make the current video playing, the first video returned back in the array.
    this.listenTo(this.get('videos'), 'reset', this.setCurrentVideo);

    //whenever the current_video attribute of the AppModel changes, the videoQueueArray function runs which places every video object that is not the current_video, in the queue of videos to be displayed on the right-hand side of the screen.
    this.listenTo(this, 'change:current_video', this.videoQueueArray)
  },

  //The searchVideos function takes the value of the search input field and sets it as searchQuery attribute of the appModel.  Then it runs the appModel's updateURL function.
  searchVideos: function () {
    this.set({ searchQuery: $('#search-input').val() });
    this.updateUrl();
  },

  //the updateUrl function concats the defaultUrl and searchQuery strings together and sends the result string to the video collection's fetchvideos function
  updateUrl: function () {
    this.get('videos').url = this.get('videos').defaultUrl + this.get('searchQuery')
    this.get('videos').fetchVideos()
  },

  //this function sets the current_video as the first video that returns from the collection's fetchvideos function
  setCurrentVideo: function() {
    this.set({ current_video: this.get('videos').at(0).attributes})
  },

  //this function creates the video queue array with every video whos id doesnt match the id of the current_video.
  videoQueueArray: function () {
    var queueArray = []
    this.get('videos').models.forEach(function(item) {
      if (item.get('id') !== appModel.get('current_video').id) {
        queueArray.push(item)
      }
    })
    this.set({current_video_queue: queueArray})
  },

});
