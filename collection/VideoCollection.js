var VideoCollection = Backbone.Collection.extend ({
    url:'"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyA3J9kaPqKWfTOk6buExB0aZGcgvSxSEh4&q=',

    searchQuery:'',

    model: VideoModel,

    parse: function(){

    },

});
