var AppView = Backbone.View.extend({
  //already exists on the page, so setting DOM element to body
  el: $('body'),

//needs to listen for user events on the view
  events:{
    //on enter, call search function
    'keypress .search-input': 'searchVideo',
    'click .queued-video': 'triggerVideoSwitch'
  },

  //when page loaded, do the following things
  initialize: function(){

    this.model.get('videos').initialSearch();
    //listen for additions to the collection and render page
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);

  },
//

// searchVideo, control for empty search criteria here before API call
searchVideo: function(e){
  //if event trigger is enter key
  if (e.which===13) {
    //nested conditional to check for empty input
    if($('.search-input').val().length === 0){
      alert('Please enter search criteria');
    }else{
      var search = $('.search-input').val();
      this.model.get('videos').fetchData(search);
    }
  }

},

//trigger videoswitch will call function in app model to change currently playing video
triggerVideoSwitch: function(){
  var newVideo = $(event.currentTarget).data().id;
  this.model.switchVideo(newVideoId);
},

//render currently playing video upon change in collection
renderVideo: function(){
//clear current DOM nodes
this.$('.currently-playing').empty();
this.$('.waiting-videos').empty();

  //loop through collection
for(var i = 0; i<this.model.get('videos').length; i++){
  //set currently playing video view to display first model
  if(i === 0){
    var playingVideoView = new PlayingVideoView({model: this.model.get('videos').models[0]})
    this.$('.currently-playing').append(playingVideoView.render().el)
    //loop through remaining 4 models and populate to page with waiting video views
  } else {
    var waitingVideoView = new WaitingVideoView({model: this.model.get('videos').models[i]})
    this.$('.waiting-videos').append(waitingVideoView.renderQueue().el)
  }
  }
},
});
