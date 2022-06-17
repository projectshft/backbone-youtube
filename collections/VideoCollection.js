const VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: '',

  // Setting up my code to add a dummy video //
  addVideo(title, description, thumbnail, videoId) {
    this.add({
      title,
      description,
      thumbnail,
      videoId,
    });
  },
});

// When the time comes to call the API //
// updateUrl(value) {
//   this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${value}&type=video&videoEmbeddable=true&key=AIzaSyBJ_kn8KJdIxc928Ml9RAwvDlThYNy6vDw`;
// },
// parse(response) {
//   return {
//     title: response.snippet.title,
//     description: response.snippet.description,
//     thumbnail: response.snippet.thumbnails.default,
//     videoId: response.id.videoId,
//   };
// },
