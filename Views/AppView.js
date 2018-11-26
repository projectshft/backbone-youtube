var AppView = Backbone.View.extend({
    el: $('body'),

    template: Handlebars.compile($('#current-template').html()),

    initialize: function () {
        this.listenTo(this.model.get('videoList'), 'add', this.renderThumbnails);

    // this.listenTo(this.model, 'change:default_video', this.renderPage);


        // this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo)

        //on load, show videos already in que
        this.renderVideoList();
        this.renderDefaultVideo();
        

      

    },
    
    events: {
        'keypress .search': 'createVideos',
        'click .view-Video': 'viewVideo'
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        //  this.renderCurrentVideo();

        return this;
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

    // viewVideo: function (e) {
    //     //jQuery to add data to attribute (data) of e.currentTarget = this
    //     var clickedVideoId = $(e.currentTarget).data().id;
    //     this.model.playVideo(clickedVideoId);
    // },

    renderVideoList: function () {
        this.model.get('videoList').each(function (v) {
            this.renderThumbnails(v);
        }, this);
    },

    renderDefaultVideo: function () {
         this.model.setDefaultVideo();

         this.$('.currentlyPlaying').append(this.render().el);
     }
});