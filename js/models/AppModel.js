//appmodel holds the current state of the application

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
//creates a new instance of videoCollection when new instance of AppModel is made.
  videos: new VideosCollection()

}

}

});
/* ******************************************** */

//returning this as a default instead of above give me back an empty collection

    // videos: function(){
    //   var newVideosArray = new VideosCollection();
    //   newVideosArray.set( 'url', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0EafJFEfzx7pWml4jkg9kLbdRJT0sFnM&part=snippet&type=video&q=dogs');
    //   newVideosArray.fetch();
    //   console.log(newVideosArray);
    //   return(newVideosArray);

/* ********************************* */
