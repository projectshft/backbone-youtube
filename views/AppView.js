var appView = Backbone.view.extend({
  el:$('body'),

  events: {
    'keypress #searchBar': 'searchVideos'

  },

  initialize: function () {
   //initial a get request
   this.model.get('videoList').getVideos(this.model.get('query'));
 },

 earchVideos: function(e) {
    if (e.which === 13) {
      //set a variable to the value of the user's search
      var query = $('#searchBar').val();
        if (!query) {
          //error handling to account for an empty search query
          alert('Enter valid search information');
        } else {
        //set the query attribute to the search information
        this.model.set('query', query)
        this.model.get('videoList').getVideos(this.model.get('query'));
      }
      $('#searchBar').val('')
    }
  },

});
