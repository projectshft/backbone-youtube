//Collection for the Video List, based on VideoModel


//take in search input from ListView
//fetch data and send to ListView


var VideoCollection = Backbone.Collection.extend ({
    //based and made up of this model
    model: VideoModel,

    //YouTube API - get something on page onLoad
    //????????????????????????????????change surfing to " +search+"??????????????????????????????????????????
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&type=video&key=AIzaSyCx1sNMmT0WK3AmUp3UTLMPXX1v8Vw7Cqs",
      
    //parse data from API to return [] without metadata
    parse: function(response){
        var items  =  response.items;
        console.log("items: " + items);

        return items;
    },
});


//Create new collection
var videoList = new VideoCollection();

//fetch videos, parse items from response, create videoModels
// videoList.fetch({ reset: true });
videoList.fetch();