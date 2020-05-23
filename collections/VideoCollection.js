var VideoCollection = Backbone.Collection.extend({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&key=" + this.key + "&q=" + this.search,
    
    key: "AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg",
    
    model: VideoModel,

    search: "The Office",

    createVideos: function(id, title, info, thumbnail) {
        this.create({
            id: id,
            title: title,
            info: info,
            thumbnail: thumbnail
          }, { wait: true });
    },

    parse: function (response) {
        return response.items.map(function (video) {
          
          return Object.assign(
            {
                'id': video.id.videoId,
                'title': video.snippet.title,
                'info': video.snippet.description,
                'thumbnail': video.snippet.thumbnails.medium.url
            }, video);

        }, this);
      }
});