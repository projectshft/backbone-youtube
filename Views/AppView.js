var AppView = Backbone.View.extend({

el:'.main-content',



template: Handlebars.compile($('#main-video-template').html()),

events: {
  //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
  'keypress .search-bar': 'createOnEnter',

},

clickedIT: function () {
  console.log(this.model);
},

initialize: function() {
  //need to see if you make basic defualts (this.id = 'egae') so video is there when page loads
//this is my attempt(it works)
  this.$el.html(this.template(this.model.get('videos').models[0].attributes))
  for (var i = 1; i < this.model.get('videos').models.length; i++ ) {
  var videoView = new VideoView( { model: this.model.get('videos').models[i] } );
  this.$el.append(videoView.render().el)
}


  this.listenTo(this.model.get('videos'), 'reset', this.renderMain);

},


createOnEnter: function (e) {

  //checking to see if keypress event was the enter bar and that input was inserted into the search bar
  if (e.keyCode == 13 && this.$('.search-bar').val()) {
    console.log('testing search bar')
    //storing user input from search bar in searchQuery variable
    var searchQuery = this.$('.search-bar').val();

    //accessing the models 'videos' collection and then running a function which appends the search query to the api URL
    this.model.get('videos').addUrl(searchQuery);

    for (var i = 0; i < this.model.get('videos').models.length; i++ ) {
      if (this.model.get('videos').models[i] == this.model.get('videos').models[0]) {
        this.$el.html(this.template(this.model.get('videos').models[i].attributes));
      } else {
        console.log('rendering side videos')
        var videoView = new VideoView( { model: this.model.get('videos').models[i] } );
        this.$el.append(videoView.render().el)
      }
    }

    //fetching the desired data from the API
    this.model.get('videos').fetch({ reset: true });
  }
},


// renderAll: function (video) {
//   console.log(video)
//   if (video = this.model.get('videos').models[0]) {
//     console.log('frist video')
//     this.$el.html(this.template(this.model.get('videos').models[0].attributes));
//     return this;
//   } else {
//     console.log('other video')
//     var videoView = new VideoView({ model: video })
//     $('.related-videos-container').append(videoView.render().el)
//     //make video template and then add each video to the co;umn viewmaking a new video view
//   }
// },
//make a for loop that goes through all of the models and if its 0 add it to the main and if its one of the others make a new view out of it and add it to the side
renderMain: function() {
  console.log('test render')
  for (var i = 0; i < this.model.get('videos').models.length; i++ ) {
    if (this.model.get('videos').models[i] == this.model.get('videos').models[0]) {
      console.log('rendering main video')
      this.$el.html(this.template(this.model.get('videos').models[i].attributes));
    } else {

      var videoView = new VideoView( { model: this.model.get('videos').models[i].attributes } );
      $('.related-videos-container').append(videoView.render().el)
    }
  }

}


});

// console.log(this.model.get('videos').models[0])
// this.model.get('videos').each(function (video) {
//   this.renderAll(video)
// }, this)
