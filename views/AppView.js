let AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchForVideoOnSubmit',
  },

  initialize: function () {
    debugger;
    this.$searchInput = this.$('#search');
    this.$main = this.$('.main');
    this.$sidebar = this.$('.video-sidebar');

    this.listenTo(this.model, 'change', this.renderVideos);
    this.listenTo(this.model, 'change:keyword', this.getVideos);
    this.listenTo(this.model, 'change:mainVideo', this.renderDetailView);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.renderVideos();
  },

  

  viewVideo: function (e) {
    let clickedVideoId = $(e.currentTarget).data().id;

    this.model.showReviews(clickedVideoId);
  },

  searchForVideoOnSubmit: function (e) {
    debugger;
    e.preventDefault();
    const searchValue = e.target.form[0].value
    if (e.type === 'click') this.model.searchVideos(searchValue);
    e.target.form[0].value = ''
  },

  getVideos: function(collection) {
    debugger;
    
    this.model.get('videos').retrieveVideos(collection.attributes.keyword);
  },

  renderMainVideo: function (video) {
    debugger;
    let videoView = new VideoViewMain({ model: video });
    this.$main.prepend(videoView.render().el);
  },

  renderSidebarVideos: function(video) {
    debugger;
    let videoView = new VideoViewSidebar({ model: video });
    this.$sidebar.append(videoView.render().el);
  },

  renderVideos: function () {
    debugger;
    this.renderMainVideo(this.model.get('videos').models[0]);

    for (let i=1; i < this.model.get('videos').length; ++i) {
      let video = this.model.get('videos').models[i];
      console.log('element: ', video);
      this.renderSidebarVideos(video);

    }
    // this.model.get('videos').each(function (video) {
    //   this.renderVideo(video);
    // }, this);
  },

  renderDetailView: function () {
    if (this.detailView) {
      this.detailView.remove();
    }

    this.detailView = new VideoDetailView({ model: this.model.get('current_video')});

    this.$('.reviews-container').append(this.detailView.render().el);
  },
});