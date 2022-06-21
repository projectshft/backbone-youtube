var VideosModel = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: 'Best Funny DOG Videos Compilation!',
    description: 'Compilation of Funny DOG Videos!',
    thumbnails: 'https://i.ytimg.com/vi/d3c7gAR5iOM/mqdefault.jpg',
    videoId: 'd3c7gAR5iOM'
  }
});

var VideosCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyDJP_kbSFYteTAEL6Dao64hwbagEOuZT_c",

  parse: function(response) {
    console.log(response);

    var self = this;

    _.each(response.items, function(item, kind) {
      console.log(item.id);
      console.log(item.id.videoId);

      var member = new self.model();

      member.set('_id', kind);
      member.set('title', item.snippet.title);
      member.set('description', item.snippet.description);
      member.set('thumbnails', item.snippet.thumbnails.medium.url);
      member.set('videoId', item.id.videoId);

      self.push(member);
      console.log('length of this collection: ' + this.length);
      console.log(this);
      return this.models;
    })
    },
  });

  
var VideosView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'displayVideos'
  },

  initialize: function () {
    this.listenTo(this.collection, 'reset', function () {
      //this.collection = new VideosCollection();

      //var self = this;

      this.collection.fetch({
        url: this.collection.url,
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
          // Change `*****` and `#####` with your own credentials.
          'appId': '*****',
          'appKey': 'AIzaSyDJP_kbSFYteTAEL6Dao64hwbagEOuZT_c',
          'query': 'dogs',
          'fields': [
              'title',
              'description',
              'thumbnails',
              'videoId']
      }),
      reset: true,
      //As `fetch` is asynchronous, wait for the operation to be completed.
      success: function () {
          //Just log the collection and see if the models have
          //been correctly populated.
          console.log(self.collection);
      }
      })
      // this.renderMainVideo();
      // this.renderSideVideos();
   })
  },

  displayVideos: function () {
    //console.log('click');
    var search = $('#search-query').val();

    $('#search-query').val('');

    
   
  }


});

var videosView = new VideosView({ model: VideosModel });

var videosCollection = new VideosCollection({ model: VideosModel });
videosCollection.fetch(
  
)

  
  
  