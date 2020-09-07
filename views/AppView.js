var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        //write click event for submitting search query
        'click .search': 'submitSearch'
    },

    initialize: function() {
        this.$searchInput = this.$('#search-input');
        this.$searchValue = this.$('#search-input').val();

    },

    submitSearch: function () {
        // VideosCollection.addVideo(query)
       
        var search = this.$('#search-input').val();
        //console.log(search)
       
        this.model.get('videos').addVideo(search)     //parameters here need to be this.$inputs etccc)
    }
    // write initialize function here make sure to include listenTo's for adding videos and render function

    //write renderPage function

    // write viewVideo function

    //write renderVideo function
})

// var appView = new AppView();