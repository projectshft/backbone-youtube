var AppView = Backbone.View.extend({
	el: $('body'),

	//click event for each search
	events: {
		"click .search-submit" : "findVideos"	
	},

	//initalize- listen to model
	initialize: function () {
		this.renderVideos();

		this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
		
  },

	//search API and add result to App Model
	findVideos: function () {
		query = this.$('#video-search').val(),
		this.model.get('videos').fetchVideo(query)
	},

	//render current
	renderVideo: function(video) {
		var currentView = new VideoListView({ model: video});
		this.$('.current-video').append(currentView.render().el)
	},

	//render all
	renderVideos: function() {
		this.model.get('videos').each(function(m) {
			this.renderVideo(m);
		}, this)
	}
});