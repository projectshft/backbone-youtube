
console.log('InAppModel');

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videosCollection: new VideosCollection(),
      
      current_video: [{
        title: 'Facts: The Leafy Seadragon', //results.items[0].snippet.title
        description:
          "Quick facts about this well camouflaged fish! The leafy seadragon (Phycodurus eques, Glauert's seadragon). Leafy seadragon facts! Subscribe: ...", //results.items[0].snippet.description
        id: 'NsGK7cUdelM', //results.items[0].id.videoId
        thumbnail: 'https://i.ytimg.com/vi/NsGK7cUdelM/default.jpg', //results.items[0].snippet.thumbnails.default.url
        youtubeEmbedUrl: 'https://www.youtube.com/embed/NsGK7cUdelM', //"https://www.youtube.com/embed/"+resulta.items[0].id.videoId
      }],
    };
  },

  // showNewVideo: function (id) {
  //   var allVideos = this.get('videos');

  //   var currentVideo = allVideos.findWhere({ id: id });

  //   this.set('current_video', currentVideo);
  //   console.log(this.get('current_video'));
  //   console.log('hello!');
  // },
});
console.log('leaving ApMmodel')


