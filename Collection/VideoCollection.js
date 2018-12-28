////////////////////////Collection for the Video List

var VideoCollection = Backbone.Collection.extend ({
    // url: 'https://www.googleapis.com/youtube/v3/search?&key=AIzaSyCx1sNMmT0WK3AmUp3UTLMPXX1v8Vw7Cqs&part=snippet&fields=id/videoId,snippet(title,description,thumbnails/key/url)&maxResults=5&type=video&q='+search+'',
    model: VideoModel,
    url: 'https://www.googleapis.com/youtube/v3/search',

    //parse data from API to return JSON without metadata
    parse: function(data){
        return data.items;
    },

    buildApiRequest: ('GET', URL, {
        maxResults: '5',
        part: 'snippet',
        q: search,
        type: 'video',
        key: 'AIzaSyCx1sNMmT0WK3AmUp3UTLMPXX1v8Vw7Cqs'
    }), 
});

//create new list collection
var videoList = new VideoCollection();

//fetch data
videoList.fetch();