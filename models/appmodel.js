var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            search: new videoCollection(),

            current_video: null

        }
    }
})