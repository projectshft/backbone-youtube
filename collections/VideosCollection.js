let VideosCollection = Backbone.Collection.extend({
	url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0&part=snippet&type=video&maxResults=5&q=Dasha%20Kabanova%20competitive%20figure%20skater',
	model: VideoModel,

	parse: function(response, options) {
		//console.log(options)
		if(options.success) {
			return response.items;
		}
		if( options.error) {
		 	window.alert('Error retriving search data.', options.error);
		}
						
	},
	//update the url with the new search query
	searchYouTube: function(inputSearch) {
		if(inputSearch === '') {
			window.alert('Search is empty. Plese enter your search request.')
		}
		else this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0&part=snippet&type=video&maxResults=5&q=${inputSearch}`;
	},

});
