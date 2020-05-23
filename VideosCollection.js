var VideosCollection = Backbone.Collection.extend({
  url: 'https://beer-review-api.herokuapp.com/beers',
  model: BeerModel,

  addBeer: function (videoId, title, description, thumbnail) {
    this.create({
        return {
          videoId: '', // data.items.id.videoId
          title: '', // data.items.snippet.title
          description: '', // data.items.snippet.description
          thumbnail: '' // data.items.snippet.thumbnails.default.url
        }, { wait: true });
  },

  parse: function (response) {
    return response.map(function (b) {
      var reviews = this.get('reviews') || new ReviewsCollection();

      reviews.set(b.reviews);

      b.reviews = reviews;

      return Object.assign({'id': b._id}, b);
    }, this);
  }
});
