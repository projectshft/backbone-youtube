const AppView = Backbone.View.extend({
  el: $('body'),
  
  events: {
    'click #submit-btn': 'submitHandler',
  },

  submitHandler: function() {
    const collection = this.model.get('videos')
    const compiledURL =  this.compileURL();
    collection.url = compiledURL;


    this.model.get('videos').fetch({
      reset: true,
      success: function() {
        console.log('fetch was successful');
        appView.submitMainVideoHandler();
        appView.submitSideVideoHandler(1, 'one')
        appView.submitSideVideoHandler(2, 'two')
        appView.submitSideVideoHandler(3, 'three')
        appView.submitSideVideoHandler(4, 'four')
      },
      error: function() {console.log('fetch failed')}
    })
  },

  compileURL: function() {
    const searchValue = $('#search-bar').val();
    const searchValModifier = `&q=${searchValue}`;
    const urlBase = this.model.get('videos').url;
    const urlBaseWithSearchVal = urlBase + searchValModifier;
    return urlBaseWithSearchVal;
  },

  submitMainVideoHandler: function() {
    const col = this.model.get('videos')

    const img = col.models[0].attributes.items[0].snippet.thumbnails.high.url;
    const title = col.models[0].attributes.items[0].snippet.title;
    const description = col.models[0].attributes.items[0].snippet.description;
    $('.main-video-row').append(`<img src=${img}>`);
    $('.main-video-title-row').append(`<h3 id="main-video-title">${title}</h3>`)
    $('.main-video-description-row').append(`<p id="main-video-description">${description}</p>`)
     
  },

  submitSideVideoHandler: function(index, idNum) {
    const col = this.model.get('videos')
    if (col.length > 0 && col.length < 5) {
      const img = col.models[0].attributes.items[index].snippet.thumbnails.high.url;
      const title = col.models[0].attributes.items[index].snippet.title;
      $(`#side-video-${idNum}`).append(`<img class="side-img" src=${img}>`);
      $(`#side-title-${idNum}`).append(`<h3 class="side-video-title-text">${title}</h3>`);
    }
  },
})