var AppView = Backbone.View.extend({
  //already exists on the page, so setting DOM element to body
  el: $('body'),

//needs to listen for user events on the view
  events:{
    //on enter, call search function
    'keypress .search-input': 'searchVideo'
  },

  //when page loaded, do the following things
  initialize: function(){

    this.model.get('videos').initialSearch();
    //listen for additions to the collection and render page
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideo)
  },
//

// searchVideo, don't allow empty submit

//render currently playing video upon change in collection
renderVideo: function(){
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
