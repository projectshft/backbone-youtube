var VideosCollection = Backbone.Collection.extend({

    url: '',

    fetchVideos: function(query) {

      this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=' +query+ '&key=AIzaSyBEG4ujnxDsiPYGHbN2S1hgQ-JSpWLOmdI';
      console.log('collection fetch URL: ', this.url);
   
      this.fetch({reset: true});
    },

    model: VideoModel,

    parse: function(response) {

      //console.log('array of items', items);

      return response.items.map(function (items){
       
        return{
          title: items.snippet.title,
          description: items.snippet.description,
          thumbnails: items.snippet.thumbnails.default.url,
          videoId: items.id.videoId
        }         
          
        }) 
     
    }
     

  });

  //'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +query+ '&key=AIzaSyBEG4ujnxDsiPYGHbN2S1hgQ-JSpWLOmdI';





  