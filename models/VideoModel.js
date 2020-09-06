console.log('InVideoModel');

var VideoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    id: '',
    thumbnail: '',
    youtubeEmbedUrl: '',
  },
});


console.log('leaving videomodel')