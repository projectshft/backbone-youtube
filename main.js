// create an AppModel var 
var AppModel = Backbone.Model.extend({

});

//create an AppView var
var AppView = Backbone.View.extend({
    el: $('body')
})

//create a VideosCollection var
var VideosCollection = Backbone.Collection.extend({
    model: VideoModel

});

//create a VideoModel var
var VideoModel = Backbone.Model.extend({

});