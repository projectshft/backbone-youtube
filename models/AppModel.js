// const my_key = 'AIzaSyC9oT5w8cbYBUkRfg2_1uJZb2YsipMyVJY';
// const my_oauth = '747385519840-818000uhjd0sq32krt5jfl4dka24nrnj.apps.googleusercontent.com';

AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      videos: new VideosCollection(),
      current_video = null,
      current_query = ''
    }
  }
});