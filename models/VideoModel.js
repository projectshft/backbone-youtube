var VideoModel = Backbone.Model.extend({
	//set youTube URL:
	// urlRoot: 'https://www.googleapis.com/youtube/v3/search'

	//set defaults for videos
	defaults: {
		title: '',
		videoId: '',
		description: '',
		thumbnail: ''
	}

});