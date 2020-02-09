let AppView = Backbone.View.extend({
	el: $('body'),

	events: {
			'click #search-button': 'getVideos',
			'click  .img-container': 'showVideoToPlay',

	},

	template: Handlebars.compile($('#player-template').html()),

	initialize: function() {

		this.$videoList = this.$('.video-list');
		this.$player = this.$('.player');
		
		//this.VideoView = null;

		this.renderVideos();

		//this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

		this.listenTo(this.model, 'change:current_video', this.renderVideos);

		//need to set to current video
		this.listenTo(this.model.get('videos'), 'reset', this.showCurrentVideo);
	},

	//search input will be passed to the new url to fetch search data and render the list of videos
	getVideos: function(e) {
		e.preventDefault();

		this.$videoList.empty();

		let inputValue = $('#query').val();
		//console.log('from getVideos input: ', inputValue)
		this.model.get('videos').searchYouTube(inputValue);

		//this.renderVideos();
		appModel.get('videos').fetch({ reset: true });

		this.clearSearchBox();
	},

	showCurrentVideo: function() {
		this.model.getFirstVideo();

		this.$player.append()
	},

	//move the video picked as current to the player section
	showVideoToPlay: function(e) {
		let clickedVideo = $(e.currentTarget).data('id');
		this.model.switchVideo(clickedVideo);
		//this.renderPlayer(??);

	},

	//display first element in the player section
	// renderPlayer: function(video) {
	// 	let playerView = new PlayerView({ model: video });

	// 	this.$player.append(playerView.render().el);
	// },

	renderVideo: function(video) {
		let videoView = new VideoView({ model: video });

		this.$videoList.append(videoView.render().el);
	},

	renderVideos: function() {
		this.model.get('videos').each(function(m) {
			this.renderVideo(m);
		}, this);
	},

	clearSearchBox: function(){
		$('#query').val('');
	}

 })

