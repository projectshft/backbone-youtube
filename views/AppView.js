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
		this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
		//listen for a change in the selected video
		this.listenTo(this.model, 'change:selected', this.renderCurrent)
		
  },

	//search API and add result to App Model
	findVideos: function () {
		query = this.$('#video-search').val(),
		this.model.get('videos').fetchVideo(query)
	},

	//render each video
	renderVideo: function(video) {
		var listView = new VideoListView({ model: video});
		this.$('.video-list').append(listView.render().el)
	},

	//render all
	renderVideos: function() {
		//delete all current videos
		this.$('.video-list').empty();
		
		this.model.get('videos').each(function(m) {
			this.renderVideo(m);
		}, this)
	},

	//update model when thumbnail is clicked
	// updateCurrent: function (e) {
	// 	console.log('Clicked')
	// 	var selectedVideoId = $(e.currentTarget).data().id;
	// 	console.log(selectedVideoId)

	// 	// this.model.updateSelected(selectedVideoId);
	// },

	//update view with new selected video
	renderCurrent: function () {
		var currentView = new CurrentVideoView()
		this.$('.current-video').html(currentView.render().el)
	}

});