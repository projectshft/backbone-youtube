// Videos collection - add API fetch here 
var VideosCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cercle&type=video&videoEmbeddable=true&key=AIzaSyCjo4u-wcr_ExFNPxiYlWZP3LLr-ythijE",

  model: VideoModel,

  addVideo: function (name, style, abv, image_url) {
    this.create(
      {
        id: id,
        videoUrl: videoUrl,
        videoTitle: videoTitle,
        videoDesc: videoDesc
      }
    );
  },
});

// Video model (clicked video)
var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: "435",
      videoUrl: "",
      videoTitle: "",
      videoDesc: ""
    };
  },
});

// Video main view (clicked video) - use id="main-display-template"
var VideoView = Backbone.View.extend({
  className: "main-display",

  template: Handlebars.compile($("#main-display-template").html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});

// start with the left side - use Current_Beer mentality from BeerReviews - may be able to use just a new view but not new model

// Videos model (5 top search results) - REALLY or just use Video Model?
// maybe use the collection and have videoView be the 

// Videos view (5 top search results) - use id="five-display-template"

// App Model - make new Videos collection here and tie it to DOM element
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      models: new VideosCollection(),

      current_viedo: null,
    };
  }
});

// App View
var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click .search": "newSearch",
  },

  createBeer: function () {
    this.model
      .get("beers")
      .addBeer(
        this.$("#name-input").val(),
        this.$("#style-input").val(),
        this.$("#abv-input").val(),
        this.$("#img-input").val()
      );
  },

  newSearch: function () {
    alert("click!"); // this works!
  },
});


// CALL IT!
var appModel = new AppModel();

var appView = new AppView({ model: appModel });


