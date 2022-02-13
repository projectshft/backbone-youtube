/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  parse(response) {
    _.each(response.items, (video) => {
      const videoModel = new this.model();

      videoModel.set('videoId', video.id.videoId);
      videoModel.set('title', video.snippet.title);
      videoModel.set('description', video.snippet.description);
      videoModel.set('thumbnailUrl', video.snippet.thumbnails.default.url);

      this.push(videoModel);
    });

    // console.log(this);
    return this.models;
  },
});
