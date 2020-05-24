var AppView = new Backbone.View.extend({
    el: $('body'),

    events: {

    },

    initialize: function () {
        this.$current = this.$('#current-video-container');
        this.$list = this.$('#list-video-container');
        this.$searchInput = this.$('#search-input');

        //call searchvideos on load with default search
        //listen to model, when current changes, renderPage
        //listen to model, when videos added, renderPage
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

        //append first video in collection to current view and the rest to the list view
        this.model.get('videos').each(function (video, index) {
            index === 0 ? this.renderCurrent(video) : this.renderList(video);
        }, this);
    },

    searchVideos: function () {
        //calls fetchvideo with search input 
    }
});