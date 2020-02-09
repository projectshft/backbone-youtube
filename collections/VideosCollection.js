var VideosCollection = Backbone.Collection.extend({
 
    url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYOjEVBCNRofWIAg3Khh4Rt3jM5jApKVo&part=snippet&type=video&q=beyonce',
    model: VideoModel,

  
    addVideos: function (videoList) {
        this.add({
            title: videoList[0].snippet.title,
            description: videoList[0].snippet.description,
            thumbnail_url: videoList[0].snippet.thumbnails.default.url,
            videoId: videoList[0].id.videoId
        },
        {
            title: videoList[1].snippet.title,
            description: videoList[1].snippet.description,
            thumbnail_url: videoList[1].snippet.thumbnails.default.url,
            videoId: videoList[1].id.videoId
        })
    },

    addSearch: function(search){
        console.log('this is what you are searching ', search)
        
       this.set('url', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYOjEVBCNRofWIAg3Khh4Rt3jM5jApKVo&part=snippet&type=video&q='+'search')
       console.log(this.get('url'))
    },

    parse: function(response){
        console.log(response.items)
            this.addVideos(response.items)
        }
  });