const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    // const searchBarVal = $('#search-bar').val();
    // console.log(searchBarVal);
    this.submitMainVideoHandler();
    this.submitVideoTwo();
    this.submitVideoThree();
    this.submitVideoFour();
    this.submitVideoFive();
  },

  submitMainVideoHandler: function() {
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
    $('.main-video-description-row').append(`<p>${description}</p>`)
  },

  submitVideoTwo: function() {
    const newImg = sampleData.items[1].snippet.thumbnails.high.url
    const newTitle = sampleData.items[1].snippet.title;
    const newVideoModel = new VideoModel({img: newImg, title: newTitle});
    videoCollection.add(newVideoModel);
    const img = videoCollection.models[1].attributes.img;
    const title = videoCollection.models[1].attributes.title;
    $('#side-video-one').append(`<img class="side-img" src=${img}>`);
    $('#side-title-one').append(`<h3>${title}</h3>`);
  },

  submitVideoThree: function() {
    const newImg = sampleData.items[2].snippet.thumbnails.high.url
    const newTitle = sampleData.items[2].snippet.title;
    const newVideoModel = new VideoModel({img: newImg, title: newTitle});
    videoCollection.add(newVideoModel);
    const img = videoCollection.models[2].attributes.img;
    const title = videoCollection.models[2].attributes.title;
    $('#side-video-two').append(`<img class="side-img" src=${img}>`);
    $('#side-title-two').append(`<h3>${title}</h3>`);
  },

  submitVideoFour: function() {
    const newImg = sampleData.items[3].snippet.thumbnails.high.url
    const newTitle = sampleData.items[3].snippet.title;
    const newVideoModel = new VideoModel({img: newImg, title: newTitle});
    videoCollection.add(newVideoModel);
    const img = videoCollection.models[3].attributes.img;
    const title = videoCollection.models[3].attributes.title;
    $('#side-video-three').append(`<img class="side-img" src=${img}>`);
    $('#side-title-three').append(`<h3>${title}</h3>`);
  },

  submitVideoFive: function() {
    const newImg = sampleData.items[4].snippet.thumbnails.high.url
    const newTitle = sampleData.items[4].snippet.title;
    const newVideoModel = new VideoModel({img: newImg, title: newTitle});
    videoCollection.add(newVideoModel);
    const img = videoCollection.models[4].attributes.img;
    const title = videoCollection.models[4].attributes.title;
    $('#side-video-four').append(`<img class="side-img" src=${img}>`);
    $('#side-title-four').append(`<h3>${title}</h3>`);
  }

})