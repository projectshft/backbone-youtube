//video collection of the 5 upnext videos
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new upNextVideoCollection(),
      currentVideo: null,//video currently playing in the webapp
      query: 'puppies'//default search criteria
    }
  }
})
