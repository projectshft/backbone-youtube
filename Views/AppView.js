const AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    this.submitHandler();
  },
  
  events: {
    'click #submit-btn': 'submitHandler',
    'click #side-video-one': 'vidOneClickHandler'
  },

  submitHandler: function() {

    $('.appended-item').remove();

    const collection = this.model.get('videos')
    const compiledURL =  this.compileURL();
    collection.url = compiledURL;
    
    collection.fetch({
      reset: true,
      success: function() {
        console.log('fetch was successful');
        appView.submitMainVideoHandler(0);
        appView.submitSideVideoHandler(0, 'zero')
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

  submitMainVideoHandler: function(index) {
    const col = this.model.get('videos')

    const vid = col.models[0].attributes.items[index].id.videoId;
    const title = col.models[0].attributes.items[index].snippet.title;
    const description = col.models[0].attributes.items[index].snippet.description;
    $('.main-video-row').append(`<iframe class="appended-item" width="560" height="315" src="https://www.youtube.com/embed/${vid}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    $('.main-video-title-row').append(`<h3 class="appended-item" id="main-video-title">${title}</h3>`)
    $('.main-video-description-row').append(`<p class="appended-item" id="main-video-description">${description}</p>`)
     
  },

  submitSideVideoHandler: function(index, idNum) {
    const col = this.model.get('videos')
    if (col.length > 0 && col.length < 5) {
      const img = col.models[0].attributes.items[index].snippet.thumbnails.high.url;
      const title = col.models[0].attributes.items[index].snippet.title;
      $(`#side-video-${idNum}`).append(`<img class="side-img appended-item" src=${img}>`);
      $(`#side-title-${idNum}`).append(`<h3 class="side-video-title-text appended-item">${title}</h3>`);
    }
  },

  vidOneClickHandler: function() {
    $('.appended-item').remove();
    appView.submitMainVideoHandler(1);
    appView.submitSideVideoHandler(0, 'zero')
    appView.submitSideVideoHandler(1, 'one')
    appView.submitSideVideoHandler(2, 'two')
    appView.submitSideVideoHandler(3, 'three')
    appView.submitSideVideoHandler(4, 'four')
  }
})