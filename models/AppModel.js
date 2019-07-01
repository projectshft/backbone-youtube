var AppModel = Backbone.Model.extend({

    // Set attributes: video collection, current video (main video in player), and current url (updated by search). 
    defaults: function () {
        return {
            videos: new VideoCollection(),
            current_video: null,
            current_URL: ''
        };
    },

    // Set current url of this model and the url of its video collection on initialize. 
    initialize: function () {
        this.set('current_URL', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=numberphile&type=video&key=AIzaSyD5dy-5GDx7outd6JdIGjjRFJxmkKKBmrw');
        this.get('videos').url = this.get('current_URL');
    },

    // On search, change this current url and collection url, and reset current video so the first result is set as main. 
    setSearchUrl: function (query) {
        var newUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + query + '&type=video&key=AIzaSyD5dy-5GDx7outd6JdIGjjRFJxmkKKBmrw';
        this.set('current_URL', newUrl);
        this.get('videos').url = this.get('current_URL');
        this.set('current_video', null);
    },

    // Find clicked video and set it to current video so it will be rendered by view as main. 
    makeClickedVideoMain: function (id) {
        var allVideos = this.get('videos');
        var currentVideo = allVideos.findWhere({ videoId: id });
        this.set('current_video', currentVideo);
    }
});