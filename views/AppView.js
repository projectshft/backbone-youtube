var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //write click event for submitting search query
        'click .search': 'submitSearch'
    },

    initialize: function() {
        this.$searchInput = this.$('#search-input');

    },

    submitSearch: function () {
        // VideosCollection.addVideo(query)
       
        let search = $('#search-input').val();
        console.log(search);
    }
    // write initialize function here make sure to include listenTo's for adding videos and render function

    //write renderPage function

    // write viewVideo function

    //write renderVideo function
})

// var appView = new AppView();