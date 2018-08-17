var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-submit': 'search'
  },

  search: function () {
    console.log('clicked submit');
    var videosCollection = new VideosCollection();
    var searchQuery = this.$el.find('#search-input').val();
    console.log('the search query is: ' + searchQuery);
    videosCollection.getData(searchQuery);
    videosCollection.on('change', function () { console.log(videosCollection.toJSON()); });
    videosCollection.fetch().then(function(){console.log(videosCollection)});
    return this;
  },

  render: function () {

    return this;
  }

});
