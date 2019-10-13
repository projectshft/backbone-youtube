let AppView = Backbone.View.extend({
  el: $('body'),

  // event listeners
  events: {
    'click #search-button': 'searchForVideoOnSubmit',
    'click .video-sidebar-click': 'replaceMainVideoOnClick'
  },
  
  // initialize key sections and model listeners
  initialize: function () {
    this.$searchInput = this.$('#search');
    this.$main = this.$('.main');
    this.$sidebar = this.$('.video-sidebar');

    this.listenTo(this.model, 'change:keyword', this.getVideos);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'change', this.renderVideos);

    this.renderVideos();
  },

  searchForVideoOnSubmit: function (e) {
    e.preventDefault();
    const searchValue = e.target.form[0].value
    if (e.type === 'click') this.model.searchVideos(searchValue);
    e.target.form[0].value = ''
  },

  getVideos: function(collection) {
    debugger;
    this.model.get('videos').retrieveVideos(collection.attributes.keyword);
  },

  replaceMainVideoOnClick: function(e) {
    this.model.get('videos').replaceMainVideo(e.currentTarget.id);
  },

  renderMainVideo: function (video) {
    let videoView = new VideoViewMain({ model: video });
    this.$main.prepend(videoView.render().el);
  },

  renderSidebarVideos: function(video) {
    let videoView = new VideoViewSidebar({ model: video });
    this.$sidebar.append(videoView.render().el);
  },

  renderVideos: function () {
    this.$('.main').empty();
    this.$('.video-sidebar').empty();

    this.renderMainVideo(this.model.get('videos').models[0]);

    for (let i=1; i < this.model.get('videos').length; ++i) {
      let video = this.model.get('videos').models[i];
      this.renderSidebarVideos(video);
    }
  },

});