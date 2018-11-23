var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'keypress .search': 'createVideos'

    },

    initialize: function () {
        //change to create
        this.listenTo(this.model.get('videoList'), 'add', this.renderThumbnails);

        this.renderVideoList();
        //      this.listenTo(this.model.get('videoList'), 'reset', this.renderVideoList);
    },


    createVideos: function (e) {
        //13 = enter key
        if (e.which === 13) {
            // console.log('test');

            //make new collection and add videos
            this.model.get('videoList').addVideos(
                //grab input
               this.$('.search').val()
            );

            // read/GET/fetch data from API jQuery AJAX --> https://www.googleapis.com/youtube/v3/search
            // buildApiRequest('GET', '/youtube/v3/search', {
            //         'maxResults': '25',
            //         'part': 'snippet',
            //         //value of search input
            //         'q ': '',
            //         'type': 'video'

            //     };
        }
    },

    renderThumbnails: function (thumbnails) {
        // console.log(thumbnails);
        var videoView = new VideoView({
            model: thumbnails
        });
        this.$('.relatedVideoList').append(videoView.render().el);
    },

    renderVideoList: function () {
        this.model.get('videoList').each(function (v) {
            this.renderThumbnails(v);
        }, this);
    }
});