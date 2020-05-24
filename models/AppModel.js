var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&key=" + this.key + "&q=" + this.search,
            key: "AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg",
            search: null
        }
    },

    //take search term and pass it to fetchVideos
    searchVideos: function () {
        console.log('searching videos');

        // var search = this.model.get('search');
        var videoList = this.get('videos');

        //set url on video collection to url with updated search term
        // videoList.url = this.url;

        console.log("video list", videoList)

        //send search phrase to fetch videos for collection
        videoList.fetchVideos();
    }
});