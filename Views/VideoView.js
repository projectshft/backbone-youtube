//View for displaying EACH video item

//listen for click on specific video --(tell Collection to) move it to PlayerView
//render to <li> on <ul> of List-template

var VideoView = Backbone.View.extend({
    tagName: 'li',
    className: 'videoItem',
    template: Handlebars.compile($('#list-template').html()),

    // initialize: function () {
    //     videoId = this.id.videoId;
    //     title = this.snippet.title;
    //     description = this.snippet.description;
    //     image = this.snippet.thumnails.default.url;

    //     //     //this.model.get('videoList')
    //     //     this.listenTo(this.model, 'add change', this.render);
    // },

    renderVideo: function () {
        // var videoView = new VideoView({ model: model });  //{ model: VideoModel }
        // this.$list.append(videoView.render().$el); //$el
        // this.$list.append('<li>Hello</li>'); //$el
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    //     // events: {
    //     //     'click .view-Video': 'onView'
    //     // },

    //     // onView: function(){
    //     //     //change position from list to currently playing
    //     //     this.model
    //     // }

});
