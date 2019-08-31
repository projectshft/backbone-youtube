const VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  //only taking in the relavent data from the api
  parse = (response) => {

      return response.items.map((videoList) => {
          return {
              title: videoList.snippet.title,
              video_id: videoList.id.videoId,
              description: videoList.snippet.description,
              img_url: videoList.snippet.thumbnails.default.url
          };
      });
  }
}); 