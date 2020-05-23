var AppView = new Backbone.View.extend({
    el: $('body')

    events: {

    },

    initialize: {
        //call searchvideos on load with default search
        //listen to model, when current changes, renderPage
        //listen to model, when videos added, renderPage
    },

    renderList: function() {
        //create list view with handlebars template, ListView.render()
    },

    renderCurrent: function() {
        //create currentView with handlebars template, currentView.render()
    },

    renderPage: function() {
        //calls renderCurrent with this.model.current_video as argument
        //calls renderList with remaining videos as argument
    },

    searchVideos: function() {
        //calls fetchvideo with search input 
    }
});