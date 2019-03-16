/*before we display the search results we want to first communicate with a "model"
then update the view in response to this "model's update"*/

var AppModel = Backbone.Model.extend({

    defaults: function() {
        return {
            videos: new VideosCollection(),
            query: 'kittens'
        };
    }
}); ``