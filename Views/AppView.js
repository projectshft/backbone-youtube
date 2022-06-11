const AppView = Backbone.View.extend({
  el: $('body'),

  // initialize: function () {
  //   this.submitHandler();
  // },
  
  events: {
    'click #submit-btn': 'submitHandler'
  },

  submitHandler: function() {
    const collection = this.model.attributes.videos;
    const compiledURL =  this.compileURL();
    collection.url = compiledURL;

    this.model.get('videos').fetch({reset: true})
    .done(function() {console.log('click fetch successful')})
    .fail(function() {console.log('fetch failed')})
    
    this.submitMainVideoHandler(collection);
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
    if (col.length > 0 && col.length < 5) {
      console.log(col.url)
      console.log(col.models[0].attributes.items[0].snippet.title)
      // const newImg = sampleData.items[0].snippet.thumbnails.high.url
      // const newTitle = sampleData.items[0].snippet.title;
      // const newDescription = sampleData.items[0].snippet.description;
      // const newVideoModel = new VideoModel({img: newImg, title: newTitle, description: newDescription});
      // col.add(newVideoModel);
      const img = col.models[0].attributes.items[0].snippet.thumbnails.high.url;
      const title = col.models[0].attributes.items[0].snippet.title;
      const description = col.models[0].attributes.items[0].snippet.description;
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