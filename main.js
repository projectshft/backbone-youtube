

const APIKey = 'AIzaSyA7i5YZ1rlLPjAeOfbXmOT3-r-Kk5pX7h4';

const testParams = 'cat'

const APIURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=${APIKey}&q=${testParams}`;



//----------
//----------
//MAIN VIDEO
//----------
//----------

//model and view

const VideoViewerModel = Backbone.Model.extend({
  
  urlRoot: APIURL,
  
  defaults: {
    video: 'video',
    title: 'title',
    description: 'description'
  }
})

const VideoViewerViewer = Backbone.View.extend({
  template: Handlebars.compile($('#video-view-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.attributes))
    return this
  },

});

//instantiations

const videoModel = new VideoViewerModel();


videoModel.fetch()
.then(res => {
  videoModel.set({
    video: res.items[0].snippet.thumbnails.high.url,
    title: res.items[0].snippet.title,
    description: res.items[0].snippet.description
  })
})
.then(() => {
  const videoViewer = new VideoViewerViewer({ model: videoModel })
  $('.viewer-container').append(videoViewer.render().el)
})


//-------
//-------
//SIDEBAR
//-------
//-------

//MODEL, VIEW, AND COLLECTION

const IndividualSidebarModel = Backbone.Model.extend({
  defaults: {
    video: 'video',
    title: 'title'
  }
})

// const IndividualSidebarView = Backbone.View.extend({
//   template: Handlebars.compile($('#individual-sidebar-template').html()),

//   render: function () {
//     this.$el.html(this.template(this.model.attributes))
//     return this
//   },
// })

const SidebarCollection = Backbone.Collection.extend({
  url: APIURL,

  model: IndividualSidebarModel,

})

//INSTANTIATIONS

const individualSidebarModel = new IndividualSidebarModel({
  
});

// const individualSidebarViewer = new IndividualSidebarView({ model: individualSidebarModel });

const sidebarCollection = new SidebarCollection();

//RENDERING

sidebarCollection.fetch()
.then(() => {
  const itemer = sidebarCollection.models[0].attributes.items
  itemer.map(res => {
    $('.sidebar-container').append(`
  <div class="img-n-title">
    <img src='${res.snippet.thumbnails.high.url}' class="collection-img"/>
    <span class="collection-title">${res.snippet.title}</span>
  </div>
  `) 
  })
})

const sidebarCollectionHTML = sidebarCollection.models.map(data => {
  $('.sidebar-container').append(`
  <div class="img-n-title">
    <img src='${data.attributes.video}' class="collection-img"/>
    <span class="collection-title">${data.attributes.title}</span>
  </div>
  `) 
})

$('.search-button').click(() => {
  const searchValue = $('#searchbar').val();

  alert(searchValue);
})







