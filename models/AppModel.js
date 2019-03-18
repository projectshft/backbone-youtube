let AppModel = Backbone.Model.extend({
  // Set defaults to return new VideosCollection
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_feature: null
    };
  },

  // A function to change the current feature video to one on the list, per click event by user (have handler in view; use "remove"?) or at the end of the feature video's playtime (extension 4). "shift" the next one from the top of the list to the feature player???).

  changeFeature: function(vidId) {
    let videoVault = this.get('videos');

    // Per Backbone documentation: findWhere directly returns only the first model in the collection that matches the passed attributes.
    let featureVideo = videoVault.findWhere({ vidId: videoId });

    this.set('current_feature', featureVideo);
  }
});

/*********************************
 * QUESTIONS: API call & search
 * ****************************** */
// // API calls are conducted by models.
// // After the API loads, call a function to enable the search box???
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }
