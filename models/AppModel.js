var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {

      //Cute cats is the default search criteria upon page load.
      videos: new VideoCollection(null, {
        query: "cute+cats"
      }),

      /*
      current_video will hold the first model in the collection upon page load.
      It is the video currently playing on the webpage.
      */
      current_video: null,
    }
  },
});
