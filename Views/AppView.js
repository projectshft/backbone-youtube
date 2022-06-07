const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    const collection = this.model.attributes.videos;
    const compiledURL =  this.compileURL();
    collection.url = compiledURL;
    collection.fetch()
    this.submitMainVideoHandler(collection)
    this.submitSideVideoHandler(collection, 1, 'one');
    this.submitSideVideoHandler(collection, 2, 'two');
    this.submitSideVideoHandler(collection, 3, 'three');
    this.submitSideVideoHandler(collection, 4, 'four');
  },

  compileURL: function() {
    const searchValue = $('#search-bar').val();
    const searchValModifier = `&q=${searchValue}`;
    const urlBase = this.model.attributes.videos.url;
    const urlBaseWithSearchVal = urlBase + searchValModifier;
    return urlBaseWithSearchVal;
  },

  submitMainVideoHandler: function(col) {
    if (col.length === 0) {
      const newImg = sampleData.items[0].snippet.thumbnails.high.url;
      const newTitle = sampleData.items[0].snippet.title;
      const newDescription = sampleData.items[0].snippet.description;
      const newVideoModel = new VideoModel({img: newImg, title: newTitle, description: newDescription});
      col.add(newVideoModel);
      const img = col.models[0].attributes.img;
      const title = col.models[0].attributes.title;
      const description = col.models[0].attributes.description;
      $('.main-video-row').append(`<img src=${img}>`);
      $('.main-video-title-row').append(`<h3 id="main-video-title">${title}</h3>`)
      $('.main-video-description-row').append(`<p id="main-video-description">${description}</p>`)
    }
  },

  submitSideVideoHandler: function(col, index, idNum) {
    if (col.length > 0 && col.length < 5) {
      const newImg = sampleData.items[index].snippet.thumbnails.high.url
      const newTitle = sampleData.items[index].snippet.title;
      const newVideoModel = new VideoModel({img: newImg, title: newTitle});
      col.add(newVideoModel);
      const img = col.models[index].attributes.img;
      const title = col.models[index].attributes.title;
      $(`#side-video-${idNum}`).append(`<img class="side-img" src=${img}>`);
      $(`#side-title-${idNum}`).append(`<h3 class="side-video-title-text">${title}</h3>`);
    }
  },
})