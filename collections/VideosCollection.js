let VideosCollection = Backbone.Collection.extend({
	url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0&part=snippet&type=video&maxResults=5&q=dasha%23kabanova',
	model: VideoModel,

	parse: function(response) {
		let result = response.items;
		let videos = [];
		//loop through response data and create an array of videos requested
		result.map(function(v,i) {
			let vObj = {};
			vObj.id = result[i].id.videoId;
			vObj.title = result[i].snippet.title;
			vObj.description = result[i].snippet.description;
			vObj.thumbnails = result[i].snippet.thumbnails.default.url;
			//console.log('v object: ', vObj);
			videos.push(vObj);

		});
		//console.log('Videos from parse: ', videos)
		return videos;
	},


});