var VideoListView = Backbone.View.extend({
  tagName: 'video-list',

  el:$("#video-list"),
  template: Handlebars.compile($('#video-list-template').html()),
// This is the for loop that displays the four videos in the video List that immediately follow the video in the center.
  initialize: function () {
    this.videos = [];
    for(var i = 1; i < 5; i++){
      this.add(this.collection[i]);
    }
    console.log(this.videos);
  },

  add: function(item) {
    this.videoDisplay = [];
    var video = new VideoModel();
    video.title = item.snippet.title;
    video.video_url = item.id.videoId;
    video.thumbnail_url = item.snippet.thumbnails.default.url;
    this.videos.push(video);
  },

  render: function () {
  this.$el.html(this.template(this.videos));

     return this;
   }

});
