var VideoModel = Backbone.Model.extend({
//need to assign a specific id to each video Model
    id: '_id',

    defaults: function () {
        return {
            title: '',
            vidId: '',
            img: '',
            vidInfo: ''
        }
    },

    parse: function(video){
      return{
        title: video.snippet.title,
        vidId: video.id.videoID,
        img: video.snippet.thumbnails.default.url,
        vidInfo: video.snippit.vidInfo
      }
    },
});
