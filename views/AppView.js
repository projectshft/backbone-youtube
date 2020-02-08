let AppView = Backbone.View.extend({
	el: $('body'),

	events: {
			'click #search-button': 'getVideos',

	},

	template: Handlebars.compile($('#player-template').html()),

	initialize: function() {

		this.$videoList = this.$('.video-list');
		this.$player = this.$('.player');
		
		this.renderVideos();
		//this.VideoView = null;

		this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

		//this.listenTo(this.model, 'change:current_video', this.renderVideos);

		this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
	},

	//search input will be passed to the new url to fetch search data and render the list of videos
	getVideos: function(e) {
		e.preventDefault();

		this.$videoList.empty();

		let inputValue = $('#query').val();
		//console.log('from getVideos input: ', inputValue)
		this.model.searchYouTube(inputValue);

		this.renderVideos();
	},
	//display first element in the player section
	renderPlayer: function(m) {
		let params= { m: m.toJSON()}
		console.log(params)
		this.$el.find('.player').html(this.template(m.params));
	},

	renderVideo: function(video) {
		let videoView = new VideoView({ model: video });

		this.$videoList.append(videoView.render().el);
	},

	renderVideos: function() {
		//counter added to render player first and list of video with the rest of the videos
		let count = 0;
		this.model.get('videos').each(function(m) {
			count++;
			//console.log(count)
			if(count === 1) this.renderPlayer(m);
			else this.renderVideo(m);
		}, this);
	},


 })

