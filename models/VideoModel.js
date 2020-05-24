var VideoModel = Backbone.Model.extend({
    defaults: function() {
        return {
          id: "",
          title: "",
          info: "",
          thumbnail: "",
          current: false
        }
    }
});