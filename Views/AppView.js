//Create the appview and tie it to the app model first.




// Building out the AppView and figuring out how the page will work. Define click events and how page will render based on listeners. 
var AppView = Backbone.View.extend({
// the el is the entire body.   
  el: $('body'),
//only need a click event for the search button
//???may need a new initializer or evnt listener for new video request from api. 
  events: {
    'click #search-youtube': 'searchYoutube',
  },
//Define initializers which assigns the pieces of the html to the javascript when the page loads.
  initialize: function () {
    this.$searchQuery = this.$('#search-query');
    this.$videoList = this.$('.video-list');

//this.model.get('videos') attaches this view to the AppModel. We will have to create renderResults. 
    this.listenTo(this.model.get('videos'), 'click', this.renderResults);

//Need to create renderVideos
    this.renderMainVideo();
  },
  //Create a new main video with info and render 
  renderMainVideo: function () {

  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$videoList.append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

});
