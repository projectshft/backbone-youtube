var AppView = Backbone.View.extend({

el:'.main-content',


//set up a handlebars template
template: Handlebars.compile($('#main-video-template').html()),

events: {
  //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
  'keypress .search-bar': 'searchOnEnter',



},



initialize: function() {
  var videosCollection = this.model.get('videos').models;
  //before a search is performed a list of videos is displayed on the screen
  this.$el.html(this.template(videosCollection[0].attributes))
  for (var i = 1; i < videosCollection.length; i++ ) {
  var videoView = new VideoView( { model: videosCollection[i] } );
  this.$el.append(videoView.render().el)
}
//listen for a fetch call to the api, which retrieves video data
  this.listenTo(this.model.get('videos'), 'reset', this.renderMain);
},


searchOnEnter: function (e) {

  //checking to see if keypress event was the enter bar and that input was inserted into the search bar
  if (e.keyCode == 13 && this.$('.search-bar').val()) {
    //storing user input from search bar in searchQuery variable
    var searchQuery = this.$('.search-bar').val();

    //accessing the models 'videos' collection and then running a function which appends the search query to the api URL
    this.model.get('videos').addUrl(searchQuery);

    //fetching the desired data from the API
    this.model.get('videos').fetch({ reset: true });
  }
},
//creating a handlebars template for the sidebar videos
templateSide: Handlebars.compile($('#column-videos-template').html()),

//make a for loop that goes through all of the models and if its at index 0 make it the main video and if its one of the others make a new view out of it and add it to the side
renderMain: function() {
  var videoIndexZero = this.model.get('videos').models[0];
  var videosCollection = this.model.get('videos').models;

  for (var i = 0; i < videosCollection.length; i++ ) {
    if (videosCollection[i] == videoIndexZero) {
      this.$el.html(this.template(videosCollection[i].attributes));
    } else {

      var videoViewsidebar = new VideoView( { model: videosCollection[i]} );
      this.$el.append(videoViewsidebar.render().el)
    }
  }

}


});
