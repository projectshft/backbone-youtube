const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    const compiledURL =  this.compileURL();
    this.model.attributes.videos.url = compiledURL;
    this.submitMainVideoHandler();
    this.submitSideVideoHandler(1, 'one');
    this.submitSideVideoHandler(2, 'two');
    this.submitSideVideoHandler(3, 'three');
    this.submitSideVideoHandler(4, 'four');
  },

  compileURL: function() {
    const searchValue = $('#search-bar').val();
    const searchValModifier = `&q=${searchValue}`;
    const urlBase = this.model.attributes.videos.url;
    const urlBaseWithSearchVal = urlBase + searchValModifier;
    return urlBaseWithSearchVal;
  },

  submitMainVideoHandler: function() {
    const thisCollection = this.model.attributes.videos;
    
    if (thisCollection.length === 0) {
      const newImg = sampleData.items[0].snippet.thumbnails.high.url
      const newTitle = sampleData.items[0].snippet.title;
      const newDescription = sampleData.items[0].snippet.description;
      const newVideoModel = new VideoModel({img: newImg, title: newTitle, description: newDescription});
      thisCollection.add(newVideoModel);
      const img = thisCollection.models[0].attributes.img;
      const title = thisCollection.models[0].attributes.title;
      const description = thisCollection.models[0].attributes.description;
      $('.main-video-row').append(`<img src=${img}>`);
      $('.main-video-title-row').append(`<h3 id="main-video-title">${title}</h3>`)
      $('.main-video-description-row').append(`<p id="main-video-description">${description}</p>`)
    }
  },

  submitSideVideoHandler: function(index, idNum) {
    const thisCollection = this.model.attributes.videos;

    if (thisCollection.length > 0 && thisCollection.length < 5) {
      const newImg = sampleData.items[index].snippet.thumbnails.high.url
      const newTitle = sampleData.items[index].snippet.title;
      const newVideoModel = new VideoModel({img: newImg, title: newTitle});
      thisCollection.add(newVideoModel);
      const img = thisCollection.models[index].attributes.img;
      const title = thisCollection.models[index].attributes.title;
      $(`#side-video-${idNum}`).append(`<img class="side-img" src=${img}>`);
      $(`#side-title-${idNum}`).append(`<h3 class="side-video-title-text">${title}</h3>`);
    }
  },
})