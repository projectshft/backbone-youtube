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
