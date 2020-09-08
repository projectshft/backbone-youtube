//create a VideoModel var
var VideoModel = Backbone.Model.extend({
    defaults: function() {
        return {
        title: '',
        description: '',
        thumbnail: '',
        videoId: ''
        }
    }

});

//create a VideosCollection var
var VideosCollection = Backbone.Collection.extend({
    model: VideoModel,
    //connect the Youtube API to our collection
   
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBCFVX7-Ic64kujaRXZD5boR3tDaaS9-C4&type=video&part=snippet&maxResults=5&q=auburntigers',
    // create parse function to only return the attributes we want for our video model
    parse: function (response) {
        return response.items.map(function (vid) {
            return {
                title: vid.snippet.title,
                description: vid.snippet.defaults,
                thumbnail: vid.snippet.thumbnails.default.url,
                videoId: vid.id.videoId
            }
        }, this);
    },
});

// create an AppModel var, includes the main video
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
                videos: new VideosCollection(),
                
                searchParameter: null,
        }
    }
    
});

// create a main vid
var MainView = Backbone.View.extend({
    id: '',

    template: Handlebars.compile($('#main-video-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})
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
            this.$('input').val();
            
        }        
    },

    initialize: function() {
        this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
        // create a listener to render new videos when the search parameter is changed
        this.listenTo(this.model, 'change:searchParamater', this.renderVideos);
        this.renderVideos();
    }, 

    //create a render main function that renders the main video and appends the data to the DOM
    renderMain: function () {
        var mainView = new MainView({ model: video});
        this.$('.main-video').append(mainView.render().el)

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

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });


