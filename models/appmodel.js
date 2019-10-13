var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),

            current_video: null,

            side_video: null
        }
    },

      showCurrentVideo: function (title, description) {
        var allVideos = this.get('videos');

        // var currentBeer = allBeers.findWhere({ id: id });

        this.set('current_video', currentVideo);
    },
});