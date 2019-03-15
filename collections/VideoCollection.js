var VideoCollection = Backbone.Collection.extend({
	// url: `https://youtube.api/search?q=${query}&part=snippet`,
	model: VideoModel,

	parse: function(response) {
		return {
			title: response.items.snippet.title,
			videoId: response.items.id.videoId,
			description: response.items.snippet.description,
			thumbnail: response.items.snippet.thumbnails.default.url
		}
	},

	//add videos to Video Model function
  addVideo: function(title, videoId, description, thumbnail) {
		this.add({
			title: title,
			videoId: videoId,
			description: description,
			thumbnail: thumbnail
		})
		{ wait: true }
	}

})