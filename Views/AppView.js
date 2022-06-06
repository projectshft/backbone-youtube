const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    // const searchBarVal = $('#search-bar').val();
    // console.log(searchBarVal);
    this.submitMainVideoHandler();
    this.submitSideVideoHandler(1, 'one');
    this.submitSideVideoHandler(2, 'two');
    this.submitSideVideoHandler(3, 'three');
    this.submitSideVideoHandler(4, 'four');
  },

  submitMainVideoHandler: function() {
    if (videoCollection.length === 0) {
      const newImg = sampleData.items[0].snippet.thumbnails.high.url
      const newTitle = sampleData.items[0].snippet.title;
      const newDescription = sampleData.items[0].snippet.description;
      const newVideoModel = new VideoModel({img: newImg, title: newTitle, description: newDescription});
      videoCollection.add(newVideoModel);
      const img = videoCollection.models[0].attributes.img;
      const title = videoCollection.models[0].attributes.title;
      const description = videoCollection.models[0].attributes.description;
      $('.main-video-row').append(`<img src=${img}>`);
      $('.main-video-title-row').append(`<h3 id="main-video-title">${title}</h3>`)
      $('.main-video-description-row').append(`<p id="main-video-description">${description}</p>`)
    }
  },

  submitSideVideoHandler: function(index, idNum) {
    if (videoCollection.length > 0 && videoCollection.length < 5) {
      const newImg = sampleData.items[index].snippet.thumbnails.high.url
      const newTitle = sampleData.items[index].snippet.title;
      const newVideoModel = new VideoModel({img: newImg, title: newTitle});
      videoCollection.add(newVideoModel);
      const img = videoCollection.models[index].attributes.img;
      const title = videoCollection.models[index].attributes.title;
      $(`#side-video-${idNum}`).append(`<img class="side-img" src=${img}>`);
      $(`#side-title-${idNum}`).append(`<h3 class="side-video-title-text">${title}</h3>`);
    }
  },
})