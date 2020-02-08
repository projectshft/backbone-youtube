var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #searchButton': 'userSearch',

  },

  initialize: function () {
    this.$videos = $('#videos-container');

  },
  
  template: Handlebars.compile($('#videoPlayer').html()),

  userSearch: function () {
    
    searchValue = $('#search').val()
    console.log('click ', searchValue)
    this.APIcall(searchValue);
    //clearing search textarea
    $('#search').val('');
  },

  APIcall: function (searchValue) {
  
    this.apiSearch = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAzyJqNn4b003qKWLcKdeUYH47sv4lRQHE&part=snippet&type=video&q=${searchValue}`;
    var videos = this.model.get('videos')
    videos.url = this.apiSearch;
    
    videos.fetch({
      success: function () {
        appModel.set('returnedVideos', true);
      },
      error: function () {
        window.alert('call did not return any vidoes. Please try again.')
      }
    });
    
    console.log(videos)
  },
});





/*

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  }

  */