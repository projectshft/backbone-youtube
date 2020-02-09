let VideosCollection = Backbone.Collection.extend({
	url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0&part=snippet&type=video&maxResults=5&q=xamarin',
	model: VideoModel,

	parse: function(response) {
		let result = response.items;
		return result;
	},
	//update the url with the new search query
	searchYouTube: function(inputSearch) {
	//console.log('from the searchYouTube: ', inputSearch)
		this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0&part=snippet&type=video&maxResults=5&q=${inputSearch}`;
	},

});
