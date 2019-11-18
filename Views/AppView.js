//I used the beer project template from class and tried to rearrge everything to fit the new video project, but this turned out to be more of a hassle than anything.  I can't get the videos to render even though I used the right template of backbone


var AppView = Backbone.View.extend({
  el: $('body'),
//pressing submit is the same as pressing enter
  events: {
    'keypress #video-search-input': 'keypressEnter',
    'click  #submit-video': 'searchNewVideo',
   
    
  },
//intial function to listen to changes in the video model
  initialize: function () {

    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
  
    
  },

  keypressEnter: function (e) {
  if(e.which === 13) {
    this.searchNewVideo()
  }},

  searchNewVideo: function (){
    this.model.get('videos').searchVideo(this.$('#video-search-input').val())

  },

  renderVideo: function () {
    
    var video = this.model.get('videos').first()
    var videoView = new VideoView({ model: video});
    this.$('#video').append(videoView.render().$el);
    //was getting undefined error, added below to fix
    return this;
  },



});
