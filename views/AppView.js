var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //change "current" status of video models when list item is clicked
        'click .list-video': 'changeStatus',

        //when new search input is entered, send new search request
        'keypress #search-input': 'updateSearch'
    },

    initialize: function () {
        //elements on page to target
        this.$current = this.$('#current-video-container');
        this.$list = this.$('#list-video-container');
        this.$searchInput = this.$('#search-input');

        //when search is complete, check for current video
        this.listenTo(this.model.get('videos'), 'add', this.renderList);

        //when current video is changed, re-render page
        this.listenTo(this.model, 'change:current_video', this.renderPage);

        //when videos added to collection, append to list view
        // this.listenTo(this.model, 'add:videos', this.setCurrent);

        //call searchvideos on load with default search
        this.searchVideos();
    },

    //create View for list of videos, render with Handlebars template, append to page
    renderList: function (video) {
        var listView = new ListView({ model: video });
        this.$list.append(listView.render().el);
    },

    //create View for current video, render with Handlebars, append to page
    renderCurrent: function (video) {
        var currentView = new CurrentView({ model: video });
        this.$current.append(currentView.render().el);
    },

    //clears page and re-renders current and list views when data changes
    renderPage: function () {
        //clear current video and list of videos
        this.$current.empty();
        this.$list.empty();

        //append current video to current view
        this.renderCurrent(this.model.get('current_video'));

        //append collection to list view
        this.model.get('videos').each(function (video) {
            this.renderList(video);
        }, this);
    },

    //swap current status of clicked video and current video
    changeStatus: function (e) {
        //change current_video model's "current" status to false
        this.model.set('current', false);

        //change clicked video's "current" status to true
        var clickedVideoId = $(e.currentTarget).data().id;
        this.model.get('videos').findWhere({ id: clickedVideoId }).set('current', true);

        //update appModel's current_video
        this.model.setCurrent();
    },

    //set current video on new search or swap clicked video with current video
    setCurrent: function () {
        //find video collection and current video
        var videoList = this.model.get('videos');
        var currentVideo = this.model.get('current_video');

        //check if current video is set
        if (currentVideo) {
            //move current video to videos (list)
            videoList.push(currentVideo, { silent: true }); //wait to re-render
        }

        //find current video in collection
        var newCurrentVideo = videoList.findWhere({ current: true });
    
        //move clicked video from list to current
        videoList.remove(newCurrentVideo, { silent: true }); //wait to re-render
        videoList.set('current_video', newCurrentVideo); //change event re-renders page
    },

    //change model's search property when new search is entered
    updateSearch: function (e) {
        //check if keypress is enter key & there is text in search input
        if (e.which === 13 && this.$searchInput.val()) {
            //get search input
            var search = this.$searchInput.val();

            //update search value on app model
            this.model.set('search', search);

            //send new search 
            this.searchVideos();
        }
    },

    searchVideos: function () {
        //find search term
        var search = this.model.get('search');

        //clear video collection and replace with search results
        var videoList = this.model.get('videos');
        
        videoList.reset();
        videoList.fetchVideos(search);
    }
});



  