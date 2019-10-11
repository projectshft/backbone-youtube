var videoCollection = Backbone.Collection.extend({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=+' + 'batman' + '&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk',
    model: VideoModel,

    addSearch: function (title, description, thumbsnails, url) {
        this.create(
            {
                title: title,
                description: description,
                thumbnails: thumbnails,
                url: url
            },
            { wait: true }
        );
    
    }
    

    // parse: function (response) {
    //     return response.map(function (b) {
    //         var reviews = this.get('reviews') || new ReviewsCollection();

    //         reviews.set(b.reviews);

    //         b.reviews = reviews;

    //         return Object.assign({ 'id': b._id }, b);
    //     }, this);
    // }

});
