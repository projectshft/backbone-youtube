// create an AppModel var 
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection()
        }
    }
});

//create an AppView var
var AppView = Backbone.View.extend({
    el: $('body'),

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

//create a VideosCollection var
var VideosCollection = Backbone.Collection.extend({
    model: VideoModel,

    addVideo: function (thumbnail, title, description, Id) {
        this.add({
            thumbnail: thumbnail,
            title: title,
            description: description,
            Id: Id
        })
    }

});

//create a VideoModel var
var VideoModel = Backbone.Model.extend({

});


// initializes a view
var appView = new AppView();