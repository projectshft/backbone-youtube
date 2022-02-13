/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',
  defaults: {
    title: '',
    thumbnailUrl: '',
  },
});
