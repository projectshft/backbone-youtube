// create an AppModel var, includes the main video
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection()
        }
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
            console.log('test')
        }        
    }
})

// create a videos view for the side videos display
var VideosView = Backbone.View.extend ({

    //needs title and imageURL

});

//create a VideosCollection var
var VideosCollection = Backbone.Collection.extend({
    //connect the Youtube API to ur collection
    url: `https://www.googleapis.com/youtube/v3search?key=AIzaSyBCFVX7-Ic64kujaRXZD5boR3tDaaS9-C4&type=video&part=snippet&maxResults=5&q=dogs`,
    model: VideoModel,
    

    addVideo: function (thumbnail, title, description, Id) {
        this.add({
            title: title,
            description: description,
            Id: Id,
            thumbnail: thumbnail
        })
    }

});

//create a VideoModel var
var VideoModel = Backbone.Model.extend({

});


// initializes a view
var appView = new AppView();