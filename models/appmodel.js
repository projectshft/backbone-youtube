var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),

            defaultVideo: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=batman&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk'

        }
    },

      showCurrentVideo: function (title, description) {
        var allVideos = this.get('videos');

        // var currentBeer = allBeers.findWhere({ id: id });

        this.set('current_video', current_video);
    },
});