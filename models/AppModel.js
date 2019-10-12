let AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      keyword: ''  
    }
  },

  searchVideos: function (keyword) {
    this.set('keyword', keyword);
  }
});
