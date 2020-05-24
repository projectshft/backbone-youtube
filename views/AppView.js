var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //change "current" status of video models when list item is clicked
        'click .list-video': 'changeStatus',

        //when new search input is entered, send new search request
        'keypress #search-input': 'updateSearch'
    },

    initialize: function () {
        console.log('app view created');
        //elements on page to target
        this.$current = this.$('#current-video-container');
        this.$list = this.$('#list-video-container');
        this.$searchInput = this.$('#search-input');

        //when search is complete, check for current video
        this.listenTo(this.model.get('videos'), 'sync', this.setCurrent);

        //when current video is changed, re-render page
        this.listenTo(this.model.get('videos'), 'change', this.renderPage);

        //when search term is updated, send new search
        this.listenTo(this.model, 'change:search', this.model.searchVideos);

        //when videos added to collection, append to list view
        // this.listenTo(this.model, 'add:videos', this.setCurrent);

        //call searchvideos on load with default search
        this.model.searchVideos();
    },

    //append video from collection to list view
    renderList: function (video) {
        console.log('rendering video')
        //create list view
        var listView = new ListView({ model: video });

        //append to page
        this.$list.append(listView.render().el);
    },

    //append current video to current view
    renderCurrent: function (video) {
        console.log('rendering current');
        //create current view
        var currentView = new CurrentView({ model: video });

        //append current view to page
        this.$current.append(currentView.render().el);
    },

    //clears page and re-renders current and list views when data changes
    renderPage: function () {
        console.log('rendering page');
        //clear current video and list of videos
        this.$current.empty();
        this.$list.empty();

        //append video collection to page
        this.model.get('videos').each(function (video) {
            if (video.get('current') === true) {
                this.renderCurrent(video)
            } else {
                this.renderList(video);
            }
        }, this);
    },

    //swap current status of clicked video and current video
    changeStatus: function (e) {
        console.log('changing status');
        //get video collection
        var videoList = this.model.get('videos');

        //change current video's "current" status to false
        videoList.where({ current: true }).set('current', false);

        //change clicked video's "current" status to true
        var clickedVideoId = $(e.currentTarget).data().id;
        this.model.get('videos').where({ id: clickedVideoId }).set('current', true);
    },

    //set current video status on new search
    setCurrent: function () {
        console.log('setting current');
        //get video collection
        var videoList = this.model.get('videos');

        //check if current video exists
        if (videoList.findWhere({ current: true }) === undefined) {
            console.log('current is undefined')
            //set first item in collection to current
            videoList.at(0).set('current', true);
        }
    },

    /*
    setCurrent: function () {
        console.log('setting current')
        //find video collection and current video
        var videoList = this.model.get('videos');
        var currentVideo = this.model.get('current_video');

        //check if current video is set
        if (currentVideo === false) {
            //move current video to videos (list)
            videoList.push(currentVideo, { silent: true }); //wait to re-render
        }

        //find current video in collection
        var newCurrentVideo = videoList.findWhere({ current: true });

        //move clicked video from list to current
        videoList.remove(newCurrentVideo, { silent: true }); //wait to re-render
        videoList.set('current_video', newCurrentVideo); //change event re-renders page
    },
    */

    //change model's search property when new search is entered
    updateSearch: function (e) {
        console.log('updating search');
        //check if keypress is enter key & there is text in search input
        if (e.which === 13 && this.$searchInput.val()) {
            //get search input
            var search = this.$searchInput.val();

            //update search value on app model
            this.model.get('videos').set('search', search);
        }
    }
});



