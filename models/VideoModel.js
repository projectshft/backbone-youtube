var VideoModel = Backbone.Model.extend ({
  defaults: function () {
    return {
      id: null,
      title: '',
      description: '',
      thumbnail: ''
    }
  }
});

// [
//   {id: 1,
//   title: 'my little pony',
//   description: 'book about ponies'},
//   {id: 2,
//   title: 'little engine that could',
//   description: 'book about an engine'},
//   {id: 3,
//   title: 'ninja turtles',
//   description: 'book about turtles'},
//   {id: 4,
//   title: 'pj masks',
//   description: 'book about pajamas'}
// ]
