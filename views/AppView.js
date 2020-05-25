var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //when new search input is entered, send new search request
        'keypress #search-input': 'updateSearch',
    },

    initialize: function () {
        //elements on page to target
        this.$current = this.$('#current-video-container');
        this.$list = this.$('#list-video-container');
        this.$searchInput = this.$('#search-input');

        //when search is complete, set current video
        this.listenTo(this.model.get('videos'), 'sync', this.setCurrent);

        //when current video is changed, re-render page
        this.listenTo(this.model, 'change:current_video', this.renderPage);

        //call searchvideos on load with default search
        this.model.searchVideos();
    },

    //append video from collection to list view
    renderList: function (video) {
        //create list view
        var listView = new ListView({ model: video });

        //append to page
        this.$list.append(listView.render().el);
    },

    //append current video to current view
    renderCurrent: function (video) {
        //create current view
        var currentView = new CurrentView({ model: video });

        //append current view to page
        this.$current.append(currentView.render().el);
    },

    //clears page and re-renders current and list views when data changes
    renderPage: function () {
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

    //set current video status on new search
    setCurrent: function () {
        //get video collection
        var videoList = this.model.get('videos');

        //check if results were returned
        if (videoList.length !== 0) {
            //check if there is a current item
            var currentVideo = videoList.findWhere({ current: true });

            if (!currentVideo) {
                //set first item in collection to current
                videoList.at(0).set('current', true); //sets off updateCurrent event then renders page
                
            } else {
                //render page without updating current if only adding videos to list
                this.renderPage();
            }
        }
    },

    //change model's search property when new search is entered
    updateSearch: function (e) {
        //check if keypress is enter key & there is text in search input
        if (e.which === 13 && this.$searchInput.val()) {

            //get search input
            var search = this.$searchInput.val();

            //update search value on app model
            this.model.set('search', search); //sets off event to search videos

            //clear search input
            this.$searchInput.val('');
        }
    }
});