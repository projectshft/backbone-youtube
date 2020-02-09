var VideoModel = BackBone.Model.extend({
    defaults: function (){
        return {
            title: '',
            description: '',
            thumbnail_url: '',
            videoId: ''
        }
    },

    //Parse the response.items [{}x5] into indvidual videos
    parse: function(videoData){
        // console.log(videoData)
        return {
            title: videoData.snippet.title,
            description: videoData.snippet.description,
            thumbnail_url: videoData.snippet.thumbnails.default.url,
            videoId: videoData.id.videoId

        }
    }
})