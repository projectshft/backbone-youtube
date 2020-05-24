var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg&q=",
            search: null
        }
    }
});