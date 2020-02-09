let AppView = Backbone.View.extend({
	el: $('body'),

	events: {
			'click #search-button': 'getVideos',
	},

	template: Handlebars.compile($('#player-template').html()),

	initialize: function() {

		this.$videoList = this.$('.video-list');
		this.$player = this.$('.player');

		//listening on the change of the video to show in player section
		this.listenTo(this.model.get('videos'), 'change:selectedVideo', this.render);

		this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
	},

	//search input will be passed to the new url to fetch search data and render the list of videos
	getVideos: function(e) {
		e.preventDefault();

		this.$videoList.empty();

		let inputValue = $('#query').val();
		//console.log('from getVideos input: ', inputValue)
		this.model.get('videos').searchYouTube(inputValue);
		//get videos to display after the serach
		appModel.get('videos').fetch({ reset: true });

		this.clearSearch();
	},

	render: function(){
		//get the first video to display in player section
		this.selectedVideo = this.model.get('videos').findWhere({selectedVideo: true});

		//change player section when different video is choosen
		if(this.selectedVideo){
		  this.$player.empty();
		  //put first video in the player container
		  this.$player.append(this.template(this.selectedVideo.attributes));
		  //update list of videos
		  this.model.get('videos');
		}
		return this;
	},

	renderVideo: function(video) {
		//set the first video in the array to selected to display in player container
		this.model.get('videos').at(0).set('selectedVideo', true);

		let videoView = new VideoView({ model: video });

		this.$videoList.append(videoView.render().el);
	},

	renderVideos: function() {
		this.model.get('videos').each(function(m) {
			this.renderVideo(m);
		}, this);
	},

	clearSearch: function(){
		$('#query').val('');
	}

 })

