var VideosCollection = Backbone.Collection.extend({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key=AIzaSyAcShyrxv_vlY9gIpLpbT9e_RvS3-tj7Dc",

    model: VideoModel, 

    parse: function(response){
        var videos = response.items;
    
        return videos.map(function(v){
            return {
                id: v.id.videoId,
                title: v.snippet.title,
                description: v.snippet.description,
                thumbnails: {
                    default:{
                        url: v.snippet.thumbnails.default.url,
                        height:v.snippet.thumbnails.default.height,
                        width:v.snippet.thumbnails.default.width 
                    },
                    medium:{
                        url: v.snippet.thumbnails.medium.url,
                        height:v.snippet.thumbnails.medium.height,
                        width:v.snippet.thumbnails.medium.width 
                    },
                    high:{
                        url: v.snippet.thumbnails.high.url,
                        height:v.snippet.thumbnails.high.height,
                        width:v.snippet.thumbnails.high.width 
                    }
                } 
            }
        })
    },

    searchForVideos: function (searchQuery){
        this.updateUrl(searchQuery);
       
        this.fetch({ reset: true });
    }, 

    updateUrl: function(query){
      var newUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=AIzaSyAcShyrxv_vlY9gIpLpbT9e_RvS3-tj7Dc`

      this.url = newUrl;
    }
    
})