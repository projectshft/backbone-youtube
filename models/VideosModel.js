/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */

var VideosModel = Backbone.Model.extend({
  idAttribute: 'videoId',
  defaults: {
    title: '',
    description: '',
    thumbnailUrl: '',
  },
});
