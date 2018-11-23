var VideoCollection = Backbone.Collection.extend ({
    // url: 'https://www.googleapis.com/youtube/v3/search?&key=AIzaSyCx1sNMmT0WK3AmUp3UTLMPXX1v8Vw7Cqs&part=snippet&fields=id/videoId,snippet(title,description,thumbnails/key/url)&maxResults=5&type=video&q=surfing',
    
  // where/how add API Key and search terms

    model: VideoModel,
   
    addVideos: function (videoId, title, image, description){
        //change to create when go to API
        this.add({
            videoId: videoId,
            title: title,
            image: image,
            description: description
        });
    }
});