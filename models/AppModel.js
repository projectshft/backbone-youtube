// AppModel
// defaults: create a video list collection. specify main stage video

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      on_stage: null,
      search_terms: null // move searchTerms here I think
    }
  },

});
