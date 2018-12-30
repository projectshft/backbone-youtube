//Holds all the state for the app (other than the values it delegates to its children)

var AppModel = Backbone.Model.extend({
    defaults: function (){
        return{
            //Create new collection
            videoList: new VideoCollection(),

            //current_video: null or surfing???
        }
    }
});