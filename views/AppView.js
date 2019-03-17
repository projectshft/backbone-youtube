var AppView = Backbone.View.extend({
	el: $('body'),

	//click event for each search
	events: {
		"click .search-submit" : "findVideos",
		"click .thumbnail" : "updateCurrent"
	},

	//initalize- listen to model
	initialize: function () {
		this.renderVideos();
	
		//listen for a reset in the model
		this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
		// //listen for a change in the selected video
		this.listenTo(this.model, 'change:currentVideo', this.renderCurrent)
  },

	//search API and add result to App Model
	findVideos: function () {
		query = this.$('#video-search').val(),
		this.model.get('videos').fetchVideo(query)
	},

	//render each video
	renderVideo: function(video) {
		var listView = new VideoListView({ model: video});
		this.$('.video-list').append(listView.render().el);
	},

	//render all
	renderVideos: function() {
		//delete all current videos
		this.$('.video-list').empty();
		
		this.model.get('videos').each(function(m) {
			this.renderVideo(m);
		}, this)
		this.renderfirstCurrent()
	},

	//render first result on initial load
	renderfirstCurrent: function() {
		var listView = new CurrentVideoView({ model: this.model.get('videos').models[0]});
		this.$('.current-video').append(listView.render().el)
	},

	updateCurrent: function(e) {
		var clickedVideoId = $(e.currentTarget).data().id;
		this.model.updateSelected(clickedVideoId)
	},

	renderCurrent: function() {
		this.model.get('currentVideo')
		current = new CurrentVideoView({ model: this.model.get('currentVideo') });
		this.$('.current-video').html(current.render().el)
	}

});