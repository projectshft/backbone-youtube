var AppView = Backbone.View.extend({

el:'.root',




events: {
  //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
  'keypress .search-bar': 'searchOnEnter',



},



initialize: function() {

//listen for a fetch call to the api, which retrieves video data
  this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

  // this.listenTo(this.model.get('videos'), 'change', this.renderVideos);


  this.model.get('videos').fetchVideos('dogs');



},


searchOnEnter: function (e) {

  //checking to see if keypress event was the enter bar and that input was inserted into the search bar
  if (e.keyCode == 13 && this.$('.search-bar').val()) {
    //storing user input from search bar in searchQuery variable
    var searchQuery = this.$('.search-bar').val();

    //accessing the models 'videos' collection and then running a function which appends the search query to the api URL
    this.model.get('videos').fetchVideos(searchQuery);

  }
},

//make a for loop that goes through all of the models and if its at index 0 make it the main video and if its one of the others make a new view out of it and add it to the side
renderVideos: function() {
console.log('rendering')
  var mainVideo = new MainVideoView ( {model: this.model.get('videos').models[0]} );
  this.$el.html(mainVideo.render().el)
  for(var i = 1; i < this.model.get('videos').models.length; i++) {
    var videoViewsidebar = new SideVideoView( { model: this.model.get('videos').models[i]} );
    this.$el.append(videoViewsidebar.render().el)

  }
}



});
