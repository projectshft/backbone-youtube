// View to render list of videos from collection

// set up default/opening view with "surfing" search
// get search input and pass to Collection



var ListView = Backbone.View.extend({
    //connect to this part of DOM <div .container <div .relatedVideosList <ul .videos-list>>>
    className: 'video',
    template: Handlebars.compile($('#list-template').html()),

    // el: $('.relatedVideoList'),

    // Take Collection of Models and render to #list-template <div .relatedVideosList <ul .videos-list>
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },


});

// // //create new instance and associate with its collection
// var videosListView = new ListView({ collection: videoList });

