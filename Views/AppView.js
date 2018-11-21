var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'keypress .search': 'getVideos'
        //collection?

    },

    initialize: function () {

    },

    //function to grab input
    // read/GET/fetch data from API jQuery AJAX
    // recv data and create/POST/save parts wanted
    getVideos: function (e) {
        if (e.which === 13) {
            console.log('test');
        };
    }
})