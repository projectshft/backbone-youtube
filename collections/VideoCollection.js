var VideoCollection = Backbone.Collection.extend({
	model: VideoModel,

	fetchVideo: function(query){
		this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${query}&type=video&videoDefinition=high&key=AIzaSyBWomZV3B6GWsBAEZDhsHJbFrUZL8COJhw`
		this.fetch({reset:true})
	},

	parse: function(response) {
		return response.items.map(b => ({
			title: b.snippet.title,
			videoId: b.id.videoId,
			description: b.snippet.description,
			thumbnail: b.snippet.thumbnails.default.url
		}));
	}
});