var AppView = Backbone.View.extend({
	el: $('body'),

	//click event for each search
	events: {
		"click .search-submit" : "findVideos"	
	},

	//initalize- listen to model
	initialize: function () {
		this.renderList();
		this.listenTo(this.model.get('videos'), 'add', this.renderCurrent);
		
  },

	//search API and add result to App Model
	findVideos: function () {
		this.model.get('videos').addVideo(
			this.$('#video-search').val()
		)
	},

	//render current
	renderCurrent: function(video) {
		var currentView = new CurrentVideoView({ model: video});
		this.$('.current-video').append(currentView.render().el)
	},

	//render all
	renderList: function() {
		this.model.get('videos').each(function(m) {
			this.renderCurrent(m);
		}, this)
	}
});