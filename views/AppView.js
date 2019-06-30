var AppView = Backbone.View.extend({

    el: $('body'),

    events: {
        'click .search-videos': 'searchVideos', 
        'click .view-video': 'viewVideo'
    },

    initialize: function () {
        this.$searchInput = this.$('#search-input');
        this.$videoList = this.$('.video-list');
        this.$videoMain = this.$('.video-main');

        this.listenTo(this.model.get('videos'), 'add', this.renderListVideo);
        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
        this.listenTo(this.model.get('videos'), 'reset', this.renderListVideos);
        this.listenTo(this.model, 'change:current_URL', this.renderListVideos);
        this.listenTo(this.model.get('videos'), 'reset', this.renderMainVideo);
        this.listenTo(this.model, 'change:current_URL', this.renderMainVideo);
        this.listenTo(this.model, 'change:current_video', this.renderMainVideo);

        this.renderListVideos;
    },

    renderPage: function () {
        console.log("render page");
    },

    viewVideo: function (e) {
        var clickedVideoId = $(e.currentTarget).data().id;
        this.model.makeClickedVideoMain(clickedVideoId);
    },

    searchVideos: function () {
        var query = this.$searchInput.val();
        console.log(query);
        debugger;
        this.model.setSearchUrl(query);
        //this.model.get('videos').reset(); 
        this.model.get('videos').fetch({reset: true});
        //this.model.set('current_video', this.model.get('videos').at(0)); 

        this.$searchInput.val('');

    },

    renderMainVideo: function () {
        console.log("render main video (AV)");
        var mainModel; 
        if (!this.model.get('current_video')) {
            mainModel = this.model.get('videos').at(0);
        } else {
            mainModel = this.model.get('current_video');
        }
        var mainVideoView = new MainVideoView({ model: mainModel });
        this.$videoMain.html(mainVideoView.render().el);
    },

    renderListVideo: function (video) {
        console.log("render list video");
        var listVideoView = new ListVideoView({ model: video });
        this.$videoList.append(listVideoView.render().el);
    },

    renderListVideos: function () {
        this.$videoList.html('');
        console.log("render list videos");
        this.model.get('videos').each(function (m) {
            this.renderListVideo(m);
        }, this);
    }
});