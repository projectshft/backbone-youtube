//Collection for the Video List, based on VideoModel

var VideoCollection = Backbone.Collection.extend ({
    //based and made up of this model
    model: VideoModel,

    //YouTube Data API 
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=skiing&type=video&key=AIzaSyCx1sNMmT0WK3AmUp3UTLMPXX1v8Vw7Cqs",
      
    //parse data from API to return [] without metadata
    parse: function(response){
        var items  =  response.items;
        console.log("items: " + items);

        return items;
    },
});





