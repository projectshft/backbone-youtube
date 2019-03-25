var AppModel = Backbone.Model.extend({
    defaults: function () {
      return {

        videos: new VideosCollection(),

        // Default query term to display videos upon page load
        query: 'yoga'

      }
    },
  });
