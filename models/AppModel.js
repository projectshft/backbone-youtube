var AppModel = Backbone.Model.extend({
	defaults: function () {
		return {
			videos: new VideoCollection(),
			currentVideo: null,

		}
	},

	updateSelected: function (id) {
		//get all models in collection
		var allVideos = this.get('videos')
		//select which model is the selected one
		var selectedVideo = allVideos.findWhere({ videoId: id });
		//set selected video as currentVideo
		this.set('currentVideo', selectedVideo)
		
	},
});