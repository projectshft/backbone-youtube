// google youtube API key AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU
// classes: .main-stage .sidebar-vids
// templates:  main-stage-template  sidebar-vids-template  main-desc-template
// handlebar madlibs: {{videoId}} {{videoTitle}}{{videoDesc}}{{thumbnail}}
// TODO search terms not passing to collection
// TODO draw all the things
var API_KEY = 'AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU';
var searchTerms = 'Amiga Retro';
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
  idAttribute: 'videoId',  // dunno about this

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
  url: function () {
    console.log('->VideoCollection searchTerms: ', searchTerms);
    searchTerms = encodeURI(searchTerms);
    var theResponse = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchTerms+ "type=video&key=" + API_KEY;
    console.log(theResponse);
    return theResponse;
  },
  model: VideoModel,

  doSearch: function (searchTerms) {
    searchTerms = {
      'query': searchTerms,
    };
    console.log('->VideoCollection doSearch() with: ', searchTerms);
    // this.fetch({ data: $.param({query: searchTerms}), reset: true });
    this.fetch({data:searchTerms}, {reset:true});
  },

  parse: function (response) {
    console.log('->VideoCollection response ',response);
    //strip off unneeded data then map() to what we do need
    response = response.items;
    console.log(response);
    console.log('parsing');
/*     console.log(response[0].id.videoId);
    console.log(response[0].snippet.title);
    console.log(response[0].snippet.description);
    console.log(response[0].snippet.thumbnails.default.url); */
    
    return response.map(function (entry, index) { 
      var onStage = false;
      // put first entry on stage. other 4 stay in list
      if (!index) {onStage = true}; 
      console.log(Object.assign({
        videoId: entry.id.videoId, 
        title: entry.snippet.title,
        description: entry.snippet.description,
        thumb_url: entry.snippet.thumbnails.default.url,
        on_stage: onStage}));
      return Object.assign({
        videoId: entry.id.videoId, 
        title: entry.snippet.title,
        description: entry.snippet.description,
        thumb_url: entry.snippet.thumbnails.default.url,
        on_stage: onStage});
    }, this);
  }

});
// AppView create
// events: submit search  (select sidebar video in sidebar videos?) (do enterkey?)
// initialize: fill with default content?  listen for video model click?
// renderApp: fill .main-stage and trigger sidebarView?
// think about what this displays
var AppView = Backbone.View.extend ({
  el: $('body'), // unsure if this buys me anything

  events: {
    'click .submit': 'performSearch'
  },

  initialize: function () {
    
    this.listenTo()  //changes in video model clicks
    this.listenTo(this.model.get('videos'), 'add', this.renderVideoEntry);
    this.$sidebarVids = this.$('.sidebar-vids');
    this.$videoSearch = this.$('#video-search');
    this.searchTerms = "Amiga retro";
    this.performSearch();
    this.renderVideoList();

  },
  renderVideoList: function () {
    console.log('renderVideoList()');
    this.model.get('videos').each(function (vid) {
      this.renderVideoEntry(vid);
    }, this);
    },
  
  renderVideoEntry: function (video) {
    console.log('renderVideoEntry()');
    var videoView = new VideoView({ model: video});
    this.$sidebarVids.append(videoView.render().el);
  },

  performSearch: function () {
    console.log('performSearch() with ', this.$videoSearch.val()),
    // send search terms to collection and fetch?
    this.model.get('videos').doSearch(
      this.searchTerms  // temp test value or default
      // this.$videoSearch.val()
    );
    // appModel.get('videos').fetch({ reset: true });
  },

  renderOnStage: function () {
    console.log('renderOnStage()');
    // when VideoModel changes to "on_stage true" render this
  }
});
// VideoView create
// className: video
// template: sidebar-vids-template
// events click
// inits  ???
// render this??
var VideoView = Backbone.View.extend({
  className: 'video',
  template: Handlebars.compile($('#sidebar-vids-template').html()),
  events: {
    'click .video': 'setOnStage'
  },
  initalize: function () {
    this.listenTo(this.model, 'on_stage', this.remove); // probably needs to be a class hide
  },

})



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
//appModel.get('videos').fetch({ reset: true });