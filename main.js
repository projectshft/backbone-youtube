

const APIKey = 'AIzaSyAwCSZgkgbJ98nIxRAbxjIROi7QzKlrCvc';

const APIURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=${APIKey}`;

let searchParam = $('#searchbar').val();

let searchParamQuery = `&q=${searchParam}`

let APIURLWithQuery = APIURL + searchParamQuery;



//----------
//----------
//MAIN VIDEO
//----------
//----------

//model and view

const VideoViewerModel = Backbone.Model.extend({
  
  urlRoot: APIURLWithQuery,
  
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

const videoViewer = new VideoViewerViewer({ model: videoModel });


videoModel.fetch()
.then(res => {
  videoModel.set({
    video: res.items[0].snippet.thumbnails.high.url,
    title: res.items[0].snippet.title,
    description: res.items[0].snippet.description
  })
})
.then(() => {
  $('.viewer-container').append(videoViewer.render().el)
})


//-------
//-------
//SIDEBAR
//-------
//-------

//MODEL AND COLLECTION

const IndividualSidebarModel = Backbone.Model.extend({
  defaults: {
    video: 'video',
    title: 'title'
  }
})

const SidebarCollection = Backbone.Collection.extend({
  url: APIURLWithQuery,

  model: IndividualSidebarModel,

})

//INSTANTIATIONS

const individualSidebarModel = new IndividualSidebarModel({
  
});

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

$('.search-button').click(() => {
  searchParam = 'cat';
  searchParamQuery = `&q=${searchParam}`;
  APIURLWithQuery = APIURL + searchParamQuery;
  console.log(APIURLWithQuery)
  videoModel.set({urlRoot: APIURLWithQuery})

  videoModel.fetch()
  .then(res => {
  videoModel.set({
    video: res.items[0].snippet.thumbnails.high.url,
    title: res.items[0].snippet.title,
    description: res.items[0].snippet.description
    })
  })
  .then(() => {
   $('.viewer-container').append(videoViewer.render().el)
  })
  $('.viewer-container').append(videoViewer.render().el)
})







