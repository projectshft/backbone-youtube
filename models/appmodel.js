// App model 
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),

            defaultVideo: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=batman&type=video&key=AIzaSyBnJsYpTzJ19zAX95PRyS0Nr1zz5HTpfpk',

            currentVideo: ''
        }
    },

//function that gets the first video of the api call 
    showCurrentVideo: function () {
        var allVideos = this.get('videos');
        var currentVideo = allVideos[0];

        this.set('currentVideo', currentVideo);
    }
    
});