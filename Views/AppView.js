var AppView = Backbone.View.extend({

  el:'body',


  events: {
    //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
    'keypress .search-bar': 'searchOnEnter',
  },

  searchOnEnter: function (e) {

    //checking to see if keypress event was the enter bar and that input was inserted into the search bar
    if (e.keyCode == 13 && this.$('.search-bar').val()) {
      //storing user input from search bar in searchQuery variable
      var searchQuery = this.$('.search-bar').val();

      //update the models search property 
      this.model.setSearch(searchQuery);
    }
  },

  renderVideos: function() {
    // //set mainvideo as first video in array
    // this.model.setMainVideo(this.model.get('videos').models[0]);

    //setting the first video in the collections array to the main video
    var mainVideo = new MainVideoView ( {model: this.model.get('mainVideo')} );
    this.$el.html(mainVideo.render().el)
    //looping through the rest of the videos and populating the sidebar view with them
    for(var i = 1; i < this.model.get('videos').models.length; i++) {
      var videoViewsidebar = new SideVideoView( { model: this.model.get('videos').models[i]} );
      this.$el.append(videoViewsidebar.render().el)
    }
  }
  });
