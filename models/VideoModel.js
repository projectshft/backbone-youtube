var VideoModel = Backbone.Model.extend({
  defaults: {
    id: null,
    title: '',
    text: '',
    thumb: '',
    currentVid: false
  }, 

  urlRoot: "https://www.youtube.com/embed/"
})