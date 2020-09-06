// google youtube API key AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU
// classes: .main-stage .sidebar-vids
// templates:  main-stage-template  sidebar-vids-template  main-desc-template
// handlebar madlibs: {{videoId}} {{videoTitle}}{{videoDesc}}{{thumbnail}}

var API_KEY = 'AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU';
// AppModel create
// defaults: create a video list collection. specify main stage video
// setStageVideo: get VideoId of selected video
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      on_stage: null,
    }
  },

  // setStageVideo: function (videoId) {
  //   this.set('on_stage', selectedVideo);
  // }

});

// VideoModel create
// defaults: title description videoId thumbnail onstage/true/false
// idAttribute??  videoId???

var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: function () {
    return {
      title: '',
      description: '',
      thumb_url: '',
      on_stage: false
    }
  }
});

// Video Collection create
// URL is a function to replace https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=amiga%20retro&key=[YOUR_API_KEY]
// model based on VideoModel
// parse: snippet.title snippet.description id.videoId snippet.thumbnails.???.default.url
// can set first response to onStage? 

var VideoCollection = Backbone.Collection.extend({
  url: function (searchTerms) {
    searchTerms = encodeURI(searchTerms);
    var theResponse = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchTerms + "type=video&key=" + API_KEY;
    console.log(theResponse);
    return theResponse;
  },
  model: VideoModel,

  parse: function (response) {
    console.log(response);
    console.log('parsing');
    return { //TODO how to iterate through this .map()?

      videoId: response.items[0].id.videoId,
      title: response.items[0].snippet.title,
      description: response.items[0].snippet.description,
      thumb_url: response.items[0].snippet.thumbnails.default.url,
      on_stage: false
    }
  }

});
// AppView create
// events: submit search  (select sidebar video in sidebar videos?) (do enterkey?)
// initialize: fill with default content?  listen for video model click?
// renderApp: fill .main-stage and trigger sidebarView?
// think about what this displays
var AppView = Backbone.View.extend ({
  // el: $('body'), // unsure if this buys me anything

  events: {
    'click .submit': 'performSearch'
  },

  initialize: function () {
    
    //this.listenTo()  changes in video model clicks
    this.searchTerms = "Amiga retro";
    this.performSearch();


  }
});
// VideoView create
// className: video
// template: sidebar-vids-template
// events click
// inits  ???
// render this

// StageView create
// className: stage
// template: main-stage-template
// initialize: listen to videoModel change: onstage; refresh render

// DetailsView create
// className: details
// template: main-details-template
// initialize: listen to videoModel change: onstage, trigger render
// 
// Sidebar create?
// iterate through [1-4] of results and render boxes of videos
// listen for onstage change, hide if true

// kickoff logic
// new AppModel()
// new AppView from AppModel
// populate defaults?
// define API key var

var appModel = new AppModel();
var appView = new AppView({ model: appModel });
appModel.get('videos').fetch({ reset: true });