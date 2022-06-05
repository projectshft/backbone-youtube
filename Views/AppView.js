const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    // const searchBarVal = $('#search-bar').val();
    // console.log(searchBarVal);
    const newImg = sampleData.items[0].snippet.thumbnails.high.url
    const newVideoModel = new VideoModel({img: newImg});
    videoCollection.add(newVideoModel);
    const img = videoCollection.models[0].attributes.img;
    $('.main-video-row').append(`<img src=${img}>`);
  }


})