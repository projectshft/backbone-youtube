var VideosCollection = Backbone.Collection.extend({
    url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYOjEVBCNRofWIAg3Khh4Rt3jM5jApKVo&part=snippet&type=video&q=halo',
    model: VideoModel,

    addVideo: function(title, description, thumbnail){
        this.create({
            title: title,
            description: description,
            thumbnail: thumbnail,
        }, { wait: true });
    },
    parse: function (response) {
        console.log(response)
    }
})