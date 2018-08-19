var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: {
      videoId: '',
      title: '',
      description:'',
      channelTitle: '',
  },

  initialize: function () {

  },

  // when 'reviews' come in from the server, they're an array...
  // this will set them back to being a collection
  parse: function (response) {
    var items = response.items;
    console.log('invoked parse');
    console.log(items);
    // return items;
    this.updateDefaults(items);
  },

  //   parse: function(response) {
  //     var items = response.data.items;
  //     return _.pluck(items, 'video');
  // }

  updateDefaults: function (items) {
    this.set('videoId', items[0].id.videoId);
    console.log("updateDefaults videoId: " + this.get('videoId'));
    // this.onChange();
    return this.model;
  },

  clicked: function () {
    console.log('Video Model says: clicked in Video View');
  }
  
});
