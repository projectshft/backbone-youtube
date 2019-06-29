var VideoModel = Backbone.Model.extend({
  urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=',

  idAttribute: 'id[videoId]',

  defaults:{}

});
