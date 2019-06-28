var AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      vids: new VidCollection(),
      main_vid: null,
    };
  },




});
