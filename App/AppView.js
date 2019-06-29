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
  console.log('stepped into renderVideo')
  //set first playing video to first video returned by API call
  playingVideoView = new PlayingVideoView({model: this.model.get('videos').models[0]})
  this.$('.currently-playing').append(playingVideoView.render().el)
},
});
