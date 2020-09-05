var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leafy+seadragon&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q',

  createUrl: function (searchTerm) {
    var searchTermTrimmed = searchTerm.trim().split(' ').join('+');
    var newUrl =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      searchTermTrimmed +
      '&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q';
    console.log(newUrl);
    var newVideosCollection = new VideosCollection();
    console.log(newVideosCollection.get('url'));
    return newUrl;
  },

  findThumbnails: function (
    currentVideoObject,
    allVideosArray,
    thumbnailsArray
  ) {
    // console.log('infindThumbnails');
    var currentVideoID = currentVideoObject[0].id;
    //push all videos that are not current (do not have same ID) to thumbnails
    for (var i = 0; i < allVideosArray.length; i++) {
      if (allVideosArray[i].attributes.id !== currentVideoID) {
        thumbnailsArray.push(allVideosArray[i]);
      }
    }
    return thumbnailsArray;
  },
});
// parse: function (response) {
//   console.log('in parse function!');

//   return response.map(function (results) {
//     console.log(results);
//     return {
//       title: results.items[0].snippet.title,
//       description: results.items[0].snippet.description,
//       id: results.items[0].id.videoId,
//       thumbnail: results.items[0].snippet.thumbnails.default.url,
//       youtubeEmbedUrl:
//         'https://www.youtube.com/embed/' + results.items[0].id.videoId,
//     };
//     console.log('return complete!')

//   });

// parse: function (response) {
//   return response.map(function (b) {
//     var videos = this.get('videos') || new VideosCollection();
//     videos.set(b.videos);
//     b.videos = videos;
//     return Object.assign(
//       {
//         title: b.items[0].snippet.title,
//         description: b.items[0].snippet.description,
//         id: b.items[0].id.videoId,
//         thumbnail: b.items[0].snippet.thumbnails.default.url,
//         youtubeEmbedUrl:
//           'https://www.youtube.com/embed/' + b.items[0].id.videoId,
//       },
//       b
//     );
//   //   }, this);
//   },
// });

// var newVideosSearched = new VideosCollection();
// newVideosSearched.on('add', function (modelThatsAdded) { console.log(modelThatsAdded.toJSON()); });
// newVideosSearched.fetch();
// console.log()
