var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&regionCode=us&key=AIzaSyAs1cLbbB7lUJsHsolNaTgni7tSfGPF-u4&q=",
            search: null
        }
    }
});