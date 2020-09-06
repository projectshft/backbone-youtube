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
    query: $('input').val(),
    //connect the Youtube API to ur collection
    //  url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBCFVX7-Ic64kujaRXZD5boR3tDaaS9-C4&type=video&part=snippet&maxResults=5&q=${query}`,
     

     
    

    //data to parse for the 5 videos
    //data.items[i].snippet.title
    //data.items[i].snippet.description
    //data.items[i].videoId
    //data.items[i].thumbnails.default.url
    

    addVideo: function (thumbnail, title, description, Id) {
        this.add({
            title: title,
            description: description,
            Id: Id,
            thumbnail: thumbnail
        })
    }

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

    //needs title and imageURL

    template: Handlebars.compile($('#videos-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON));
        console.log(this);
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

    renderVideo: function (video) {
        var videosView = new VideosView ({ model: video});
        this.$('.col-md-3').append(videosView.render().el);
    },

    initialize: function() {
        this.renderVideos();
    },

    renderVideos: function () {
        this.model.get('videos').each(function (m) {
            this.renderVideo(m)
        }, this);
    }
})

// initializes a view and model
var appModel = new AppModel;

appModel.get('videos').addVideo('Movie', 'Cinderella falls in love', '23423', 'an image')
appModel.get('videos').addVideo('Show', 'forever away', '234', 'an image')
appModel.get('videos').addVideo('Dracula', 'dracula kills in love', '234', 'an image')
var appView = new AppView({ model: appModel });


