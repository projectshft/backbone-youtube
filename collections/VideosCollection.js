var VideosCollection = Backbone.Collection.extend({

    url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAgOh1wfDiw6ozEKf4L6rTHqRjLn-Kom-s&part=snippet&type=video&q=jayz',

    model: VideoModel,

    parse: function (response) {
        //This returns an array of 5 videos 

        console.log(response.items)
        return response.items
       
    }

});