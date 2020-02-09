var VideoModel = Backbone.Model.extend({

	defaults: function () {
		return {
		  id: '',
		  title: '',
		  description: '',
		  thumbnails: '',
		  selectedVideo: false
		}
	},
	parse: function(data){
		return {
			id: data.id.videoId,
			title: data.snippet.title,
			description: data.snippet.description,
			thumbnails: data.snippet.thumbnails.default.url
		}
	}

});