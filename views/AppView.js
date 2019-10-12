let AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchForVideoOnSubmit',
  },

  initialize: function () {
    debugger;
    this.$searchInput = this.$('#search');
    this.$main = this.$('.main');

    console.log('Videos is: ', this.model.get('videos'))
    this.listenTo(this.model, 'change', this.renderVideos);
    this.listenTo(this.model, 'change:keyword', this.getVideos);
    this.listenTo(this.model, 'change:current_video', this.renderDetailView);
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

  renderVideo: function (video) {
    debugger;
    let videoView = new VideoView({ model: video });
    this.$main.append(videoView.render().el);
  },

  renderVideos: function () {
    debugger;
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
  },

  renderDetailView: function () {
    if (this.detailView) {
      this.detailView.remove();
    }

    this.detailView = new VideoDetailView({ model: this.model.get('current_video')});

    this.$('.reviews-container').append(this.detailView.render().el);
  },
});