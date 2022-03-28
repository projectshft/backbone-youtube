
var AppView = Backbone.View.extend({
 
  el: $('body'),

  events: {
    'click .btn': 'userSearch',  
  },

  
  userSearch: function() {
    console.log('test');
    if(this.$('.input').val()) {
      var userInput = this.$('.input').val();   
      var url =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&type=video&videoEmbeddable=true&key=AIzaSyCuZkTkLT7pAbGYodRnTSHgzDYtty53nwU`;
      var appModel = new AppModel({videos: new VideoCollection({url: url})});
      var videoCollection = new VideoCollection();
      console.log(videoCollection);
    }
  },

  renderVideos: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
