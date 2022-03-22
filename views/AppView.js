/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-search': 'handleSubmitClick',
    'click .thumbnail': 'handleThumbnail',
    'keyup #search-query': 'handleEnterKey',
  },

  results: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyBKNZGIlCDmF6OqxU4eU4NsIcvV5Lx1SCw&q=`,

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderDefault);

    this.model.get('videos').fetch({
      reset: true,
      url: this.results,
    });

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:videoResult', this.renderVideoResult);
  },

  handleSubmitClick: function () {
    var searchVal = this.$('#search-query').val();

    if (searchVal) {
      this.model.get('videos').fetch({
        reset: true,
        url: this.results + searchVal,
      });
      this.$('#search-query').val('').blur();
    } else {
      alert('Please enter a search');
    }
  },

  handleThumbnail: function (e) {
    var id = $(e.currentTarget).data().id;

    this.model.playVideoResult(id);
  },

  handleEnterKey: function (e) {
    if (e.keyCode === 13) {
      this.handleSubmitClick();
      return false;
    }
  },

  renderDefault: function () {
    this.model.set('videoResult', this.model.get('videos').first());
  },

  renderSideVideos: function (video) {
    var sideVideosView = new SideVideosView({ model: video });

    this.$('.side-videos').append(sideVideosView.render().el);
  },

  renderVideoResult: function () {
    this.$('.video-result').empty();

    var videoResultView = new VideoResultView({
      model: this.model.get('videoResult'),
    });

    this.$('.video-result').append(videoResultView.render().el);
  },

  renderVideos: function () {
    this.$('.side-videos').empty();

    this.renderVideoResult();

    this.model.get('videos').each(function (videosModel) {
      this.renderSideVideos(videosModel);
    }, this);
  },
});
