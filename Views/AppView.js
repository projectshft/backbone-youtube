//renders whole screen and trigger renders for its children

var AppView = Backbone.View.extend({
    el: $('body'),

   

    events: {
        'click .view-Video': 'viewVideo',

        //get search input and pass to Collection
        'keypress .search': 'updateOnEnter',
    },

    initialize: function () {
        this.$relatedList = this.$('.related-videos');
        this.listenTo(this.model.get('videoList'), 'add', this.renderVideo);

        this.listenTo(this.model, 'change:current_video', this.renderPlayerView);

        // this.listenTo(this.model, 'change:searchTerm', this.updateUrl);

        //render view as soon as collection finishes sync with API
        this.listenTo(this.model.get('videoList'), 'reset', this.renderVideoList, this.renderPlayerView)

        this.renderVideoList();

        // this.playerView = this.videoList.shift;
    },

    //ISSUE: No starting playing video
    viewVideo: function (e) {
        var clickedId = $(e.currentTarget).data().id;
        this.model.changePlayingVideo(clickedId);
    },

    //If you hit 'enter,
    updateOnEnter: function (e) {
        if (e.which === 13) {
            //gets term from search form
            var searchTerm = $('.search').val()

            //add that term to collection's search attribute
            // 
            // this.model.get('videoList').set('searchTerm', searchTerm)

          

        }
    },

    // updateUrl: function () {
    //     this.model.get('videoList').fetch();
    // },

    renderVideo: function (VideoModel) {
        var listView = new ListView({ model: VideoModel });
        this.$relatedList.append(listView.render().el);
    },

    renderVideoList: function () {
        this.model.get('videoList').each(function (m) {
            this.renderVideo(m);
        }, this);
    },

    renderPlayerView: function () {
        if (this.playerView) {
            this.playerView.remove();
        }

        this.playerView = new PlayerView({ model: this.model.get('current_video') });

        // this.playerView = this.videoList.shift;
        this.$('.player-container').append(this.playerView.render().el);


    },

});