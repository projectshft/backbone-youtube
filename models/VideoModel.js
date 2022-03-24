var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
        id: '',
        img: '',
        title: '',
        description: '',
        isMainVideo: false
    }
  }
})