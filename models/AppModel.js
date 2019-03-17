var AppModel = Backbone.Model.extend({
	defaults: function () {
		return {
			videos: new VideoCollection(),
			current_video: null,
			selected: false
		}
	},

	//clear previous video and update to selected video
	// selectedVideo: function(id) {
	// 	allVideos = this.get('videos');
	// 	var currentVideo= this.findWhere({ id: id})
	// 	this.set('current_video', currentVideo )
	// 	this.set('selected', true)
	// } 
});