var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        'click .submit-query': 'fetchVideos'
    },

    fetchVideos: function () {
        var query = $('.query').val();

        console.log(query);

        $('.query').val('');
    }
});
