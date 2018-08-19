var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit': 'postVideo'
  },
  initialize: function (){
    console.log('model initialized')
  },

  renderPage: function () {
  },

  postVideo: function(video){
    console.log('post video function accessed')
  }
})
