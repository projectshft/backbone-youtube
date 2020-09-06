// create an AppModel var 
var AppModel = Backbone.Model.extend({

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
    model: VideoModel

});

//create a VideoModel var
var VideoModel = Backbone.Model.extend({

});



var appView = new AppView();