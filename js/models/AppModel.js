//appmodel holds the current state of the application

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
//creates a new instance of videoCollection when new instance of AppModel is made.
  videos: new VideosCollection()

}

}

});
