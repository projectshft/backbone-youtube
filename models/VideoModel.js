var VideoModel = Backbone.Model.extend({
	//set defaults for videos
	defaults: function() {
    return{
		title: '',
		videoId: '',
		description: '',
		thumbnail: ''
	 }
  }
});
