
var AppView = Backbone.View.extend({
 
  el: $('body'),

  events: {
    'click .btn': 'userSearch',  
  },

  
  userSearch: function() {
    console.log('test');
    if(this.$('.input').val()) {
      var userInput = this.$('.input').val();   
     
      console.log(videoCollection);
    }
  },

  renderVideos: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
