const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'findVideos',
  },

  initialize() {
    this.model.get('videos').updateUrl('javascript');
  },

  findVideos() {
    if (!this.$('#search-query').val()) {
      return alert('Please enter a search term');
    }

    const query = this.$('#search-query').val();
    this.model.get('videos').updateUrl(query);
  },
});