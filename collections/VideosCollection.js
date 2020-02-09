var VideosCollection = Backbone.Collection.extend({
 
    url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYOjEVBCNRofWIAg3Khh4Rt3jM5jApKVo&part=snippet&type=video&q=beyonce',
    model: VideoModel,


    addSearch: function(search){
        console.log('this is what you are searching ', search)
        
       this.set('url', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYOjEVBCNRofWIAg3Khh4Rt3jM5jApKVo&part=snippet&type=video&q='+'search')
       console.log(this.get('url'))
    },

    //Parse once to get the array of videos then parse again
    //in video model to get each video and info from items array
    parse: function(response){
        var videoList = response.items
        return videoList
    }
  });