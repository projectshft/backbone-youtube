var AppView = Backbone.View.extend({
  el: $('body'),

  events: {

    //a click on the search field's search button triggers the triggersearchvideos function sets the search_query attribute of the model to the input value in search field.
    'click .search-button': "triggerSearchVideos",

    //if enter is pressed on the search input field, the value is used to run the triggerSearchVideos function.
    'keypress #search-input': "searchOnEnter"
  },

  initialize: function () {

    //whenever there is a change to the current_video attribute of the model, the page re-renders
    this.listenTo(this.model, 'change:current_video', this.renderPage)
  },

  //this function uses the value of the search input field to run the searchVideos function of the model
  triggerSearchVideos: function() {
    this.model.searchVideos()
    $('#search-input').val("")
  },

  //when the enter key is pressed on the search input field, the triggerSearchVideos function runs
  searchOnEnter: function(e) {
    if (e.which === 13) {
      this.triggerSearchVideos()
    }
  },

  //this function creates instances of the VideoPlayView and the VideoQueueView and runs their render functions to render the current video on the left of the screenand the video queue list on the right of the screen
  renderPage: function() {
    var videoPlayView = new VideoPlayView({ model: appModel});
    var videoQueueView = new VideoQueueView({model: appModel})
    videoPlayView.renderPlayer();
    videoQueueView.renderQueue();
  },


})
