//js/Models/VideoModel.js
//this sets the default values for the models that are passed to the collection and will ultimately be used to construct views for videos to render on page

var Video = Backbone.Model.extend({
  defaults: function () {
    return {
      videoId: '',
      name: '',
      description: '',
      imgUrl: ''
    }
  }

});
