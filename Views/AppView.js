const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    // const searchBarVal = $('#search-bar').val();
    // console.log(searchBarVal);
    const newImg = sampleData.items[0].snippet.thumbnails.high.url
    const newTitle = sampleData.items[0].snippet.title;
    const newDescription = sampleData.items[0].snippet.description;
    const newVideoModel = new VideoModel({img: newImg, title: newTitle, description: newDescription});
    videoCollection.add(newVideoModel);
    const img = videoCollection.models[0].attributes.img;
    const title = videoCollection.models[0].attributes.title;
    const description = videoCollection.models[0].attributes.description;
    $('.main-video-row').append(`<img src=${img}>`);
    $('.main-video-title-row').append(`<h3>${title}</h3>`)
    $('.main-video-description-row').append(`<p>${description}</p>`)
  }


})