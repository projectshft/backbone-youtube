var VideoCollection = Backbone.Collection.extend({
    url:  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=+' + 'batman' + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk',
    model: VideoModel,

        
    addVideos: function (title, description, thumbsnails, url) {
        var title = this.$el.find('input').val();
        var video
        console.log(addVideos);
        this.create(
            {
                title: response.items.snippet[0].title,
                description: description,
                thumbnails: thumbnails,
                url: url
            },
            { wait: true }
        );

    },
    

    parse: function (response) {

        console.log(response);
        return response
       
    }

});
