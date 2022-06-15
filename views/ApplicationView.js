const ApplicationView = Backbone.View.extend({
  el: $('.application-view'),

  events: {
    'click .btn': 'handleSearchClick',
  },
  initialize() {
    this.$searchInput = this.$('.search-bar');
  },
  handleSearchClick() {
    const searchValue = this.$searchInput.val();
    this.model.get('videos');
  },
});
