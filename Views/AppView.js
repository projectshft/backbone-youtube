//I used the beer project template from class and tried to rearrge everything to fit the new video project, but this turned out to be more of a hassle than anything.  I can't get the videos to render even though I used the right template of backbone


var AppView = Backbone.View.extend({
  el: $('body'),
//pressing submit is the same as pressing enter
  events: {
    'keypress #search': 'searchOnEnter'
  },
//intial function to listen to changes in the video model
  initialize: function () {
    this.$videoInput = this.$('#name-input');
    this.$artistInput = this.$('#style-input');
  

    this.listenTo(this.model.get('video'), 'add', this.renderVideos);
    this.listenTo(this.model.get('video'), 'change:mainVideo', this.renderMainVideo);
    

    this.renderVideos();
  },
//function to render videos, used the same format as the beers but I am clearly missing something
  renderVideos: function () {
    var videoView = new VideoView({ model: video});
    this.$thumbnails.append(videoView.render().el);
  },

  backToVideos: function () {
    debugger;
    this.model.showVideos();
  },

  viewVideos: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showReviews(clickedVideoId);
  },

});
