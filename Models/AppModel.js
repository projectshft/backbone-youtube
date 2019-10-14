var AppModel = Backbone.Model.extend({
    defaults: function () {
      return {
        video: new videoModel,
        current_Video: null

        //searchData 
      }
    }
});