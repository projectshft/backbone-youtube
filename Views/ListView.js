// View to render list of videos from collection

// set up default/opening view with "surfing" search
// get search input and pass to Collection



var ListView = Backbone.View.extend({
    //connect to this part of DOM <div .container <div .relatedVideosList <ul .videos-list>>>
    el: $('.relatedVideoList'),
    // template: Handlebars.compile($('#list-template').html()),

    //render view as soon as collection finishes sync with API
    initialize: function () {
        this.listenTo(this.collection, 'sync reset', this.render, this);
    },


    // Take Collection of Models and render to #list-template <div .relatedVideosList <ul .videos-list>
    render: function () {
       //empty list container with jQuery
        var $list = this.$('ul.videos-list').empty()
        
        //make new view for each model in collection
        this.collection.each(function(model) {
            // this.renderVideo(model);
            // console.log("going to videoView");
            var videoView = new VideoView({ model: VideoModel });  //{ model: VideoModel }
            $list.append(videoView.render().$el); //$el
        }, this);
        return this;
    },


});

// //create new instance and associate with its collection
var videosListView = new ListView({ collection: videoList });

