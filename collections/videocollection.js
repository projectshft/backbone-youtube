var VideoCollection = Backbone.Collection.extend({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + 'batman' + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk',
    model: VideoModel,

    searchedVideo: function (videoSearch) {
        console.log(searchedVideo);
        this.url('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + videoSearch + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk')
    },

        
    // addVideos: function (title, description, thumbsnails, url) {
    //     var title = this.$el.find('input').val();
    //     var video
    //     console.log(addVideos);
    //     this.create({
    //             title: response.items.snippet[0].title,
    //             description: description,
    //             thumbnails: thumbnails,

    //         },
    //         { wait: true }
    //     );

    // },
    

    parse: function (response) {
        var videos = []
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            videos.push({ title: item.snippet.title, description: item.snippet.description, thumbnails: item.snippet.thumbnails.default, id: item.id.videoId})
        }
        
        return videos     
    },

});
