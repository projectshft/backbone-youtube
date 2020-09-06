var VideosCollection = Backbone.Collection.extend({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyAxMNbDRLIbzI-s1zAqPGCnPYddrW7s1p8`,
    model: VideoModel,

    addVideo: function(id, title, description, thumbnail) {
        this.create({
            id: id,
            title: title,
            description: description,
            thumnail: thumbnail
        }, {wait: true});
    },

    parse: function(response) {
        return response.map(function(item) {
            var id = this.get('id');

            id.set(item.id);                    //////Need to check this

            item.id = id;

            return Object.assign({'id': item.id}, item);
        }, this);
    }

})

videosCollection = new VideosCollection();
console.log(videosCollection);