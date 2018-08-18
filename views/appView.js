var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit': 'postVideo'
  },

  postVideo: function(video){
    console.log('post video function accessed')
  }
})
