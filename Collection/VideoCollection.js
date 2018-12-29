//Collection for the Video List, based on VideoModel


//take in search input from VideoListView
//fetch data and send to VideoList View


var VideoCollection = Backbone.Collection.extend ({
    //based and made up of this model
    model: VideoModel,

    //YouTube API - get something on page onLoad
    //????????????????????????????????change surfing to " +search+"??????????????????????????????????????????
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&type=video&key=AIzaSyCx1sNMmT0WK3AmUp3UTLMPXX1v8Vw7Cqs",
      
    //parse data from API to return without metadata
    parse: function(response){
        var items  =  response.items;
        console.log("items: " + items);
        return items;

    },
    
//     addVideo: function (videoId, title, image, description) {this.create({ 
//         videoId:id.videoId,
//         title: snippet.title,
//         image: snippet.thumbnails.default.url,
//         description: snippet.description
//     }, {wait: true});
// },

    

});

var videoList = new VideoCollection();
// videoList.fetch({reset: true});
videoList.fetch().then(function(){
    console.log(videoList.length);
});
