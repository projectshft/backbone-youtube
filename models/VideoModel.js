var VideoModel = Backbone.Model.extend({  
 
  defaults: {
    id: null,
    title: '',
    text: '',
    thumb: '',
  }, 

  urlRoot: "https://www.youtube.com/embed/"
})