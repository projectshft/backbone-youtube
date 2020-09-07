//create a VideoModel var
var VideoModel = Backbone.Model.extend({
    defaults: {
        thumbnail: '',
        title: ''

    }

});

//create a VideosCollection var
var VideosCollection = Backbone.Collection.extend({
    model: VideoModel,
    //query: $('input').val(),
    //connect the Youtube API to ur collection
    //  url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBCFVX7-Ic64kujaRXZD5boR3tDaaS9-C4&type=video&part=snippet&maxResults=5&q=${query}`,

    //data to parse for the 5 videos
    //data.items[i].snippet.title
    //data.items[i].snippet.description
    //data.items[i].videoId
    //data.items[i].thumbnails.default.url

});

// create an AppModel var, includes the main video
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection()
        }
    }
});

// create a videos view for the side videos display
var VideosView = Backbone.View.extend ({
    className: 'video',

    //needs title and imageURL

    template: Handlebars.compile($('#videos-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});

//create an AppView var to display the main video
var AppView = Backbone.View.extend({
    el: $('body'),
// needs title, description and the id for the iframe
    events: {
        'keypress input' : 'createVideo'
    },
    // create a function that will search for YT videos when enter is pressed
    createVideo: function (e) {
        if (e.keyCode === 13) {
            let query = $('input').val();
            console.log(query);
        }        
    },

    initialize: function() {
        this.renderVideos();
    },
    //create a render video function that creates a new videos view and appends the data to the DOM
    renderVideo: function (video) {
        var videosView = new VideosView({ model: video });
        this.$('.videos').append(videosView.render().el);
        
    },

    renderVideos: function () {
        this.model.get('videos').each(function (m) {
            this.renderVideo(m);
        }, this);
    }
});

// initializes a view and model
var appModel = new AppModel;
//hardcode in some side videos to understand the flow of the HTML
appModel.get('videos').add([
  {title: 'Auburns Final Play in Iron Bowl', thumbnail: 'https://i.ytimg.com/vi/9ZmZ-ZrRYD0/default.jpg'},
  {title: 'Boe Jackson, a legacy', thumbnail: 'https://i.ytimg.com/vi/0TkD_C7fB-Q/default.jpg'},
  {title: 'War Damn Eagle', thumbnail: 'https://i.ytimg.com/vi/VO9n74Jzilg/default.jpg'},
  {title: 'Bo Nicks, next Cam Newton?', thumbnail: 'https://i.ytimg.com/vi/KBETP_VvEOs/default.jpg'},
  {title: 'Cam Newton highlights', thumbnail: 'https://i.ytimg.com/vi/XocQcgQzrOk/default.jpg'}
]);

var appView = new AppView({ model: appModel });


