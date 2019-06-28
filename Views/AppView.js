var AppView = Backbone.View.extend({

el: $('.main-body'),

events: {
  //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
  'keypress .search-bar': 'createOnEnter'
},

createOnEnter: function (e) {
  //checking to see if keypress event was the enter bar and that input was inserted into the search bar
  if (e.keyCode == 13 && this.$('.search-bar').val()) {
    //storing user input from search bar in searchQuery variable
    var searchQuery = this.$('.search-bar').val();
    //accessing the models 'videos' collection and then running a function which appends the search query to the api URL
    this.model.get('videos').addUrl(searchQuery);
    //fetching the desired data from the API
    this.model.get('videos').fetch();

}
}

});
