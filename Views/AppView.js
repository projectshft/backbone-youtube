var AppView = Backbone.View.extend({

el: $('body'),

template: Handlebars.compile($('#main-video-template').html()),

events: {
  //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
  'keypress .search-bar': 'createOnEnter'
},

initialize: function() {
  this.listenTo(this.model.get('videos'), 'reset', this.renderMain);
},

createOnEnter: function (e) {

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

renderAll: function (video) {
  console.log(video)
  if (video = this.model.get('videos').models[0]) {
    // console.log('frist video')
    this.$el.html(this.template(this.model.get('videos').models[0].attributes));
    return this;
  } else {
    // console.log('other video')
    var videoView = new VideoView({ model: video })
    $('.related-videos-container').append(videoView.render().el)
    //make video template and then add each video to the co;umn viewmaking a new video view
  }
},

renderMain: function() {
console.log(this.model.get('videos'))
// this.model.get('videos').each(function (video) {
//   this.renderAll(video)
// }, this)

}


});
