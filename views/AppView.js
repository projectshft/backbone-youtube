
var AppView = Backbone.View.extend({
 
  el: $('body'),

  events: {
    'click .btn': 'userSearch',  
  },

  initialize: function(){
    this.$videos = this.$('.videosList');
    this.listenTo(this.collection, 'add', this.renderVideos);
  },

  
  userSearch: function() {
    console.log('test');
    if(this.$('.input').val()) {
      var userInput = this.$('.input').val();
      this.model.videos.searchVideo(userInput);
    }
  },

  renderVideos: function() {
    console.log("renderVideos is invoked!");
    // var videoView = new VideoView({model: videoModel});
    // this.$videos.append(videoView.render().el);
    // this.$el.html(this.template(this.model.videos));
    return this;
  }
});

// TODO: listen for data added to collection, and display a list of returned models on the page. Each time renderVideos function is invoked (looks like it happens every time each one of 5 models get added to collection), invoke a render method in videoView in order to append it to a <ul> element with class name .videosList.