// AppModel
// defaults: create a video list collection. specify main stage video

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      on_stage: null,
      hold_searchTerms: null // move searchTerms here I think
    }
  },


});

// initialize a search term change 
// form a URL builing function - find where to call it