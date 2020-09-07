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
    console.log('->VideoCollection fetch searchTerms: ', searchTerms);
    searchTerms = encodeURI(searchTerms);
    var theResponse = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchTerms+ "&type=video&key=" + API_KEY;
    searchTerms = '';
    console.log(theResponse);
    return theResponse;
  },

  model: VideoModel,
// likely all this is skippable and can be put into the appView
 /*  doSearch: function (query) {
    // query = {
    //   'query': query,
    // };
    console.log('->VideoCollection doSearch() with: ', query);

    this.fetch({data: {q: query}});

  },
 */

  parse: function (response) {
    console.log('->VideoCollection response ',response);
    //strip off unneeded data then map() to what we do need
    response = response.items;
  
    console.log('parsing');

    
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
    
    // this.listenTo(this.model.get('videos'), 'add', this.renderVideoEntry);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
    this.$sidebarVids = this.$('.sidebar-vids');
    this.$videoSearch = this.$('#video-search');
    this.performSearch();
    this.renderVideoList();

  },
  // models created from collection fetch. now create views
  renderVideoList: function () {
    console.log('renderVideoList()');
    this.model.get('videos').each(function (vid) { // TODO skip onStage true
      this.renderVideoEntry(vid);
    }, this);
    },
  // create and render views of video listings
  renderVideoEntry: function (video) {
    console.log('renderVideoEntry()');
    var videoView = new VideoView({ model: video});
    this.$sidebarVids.append(videoView.render().el);
  },

  performSearch: function () {
    console.log('performSearch() with ', this.$videoSearch.val());
    console.log('versus global ',  searchTerms);
    // send search terms to collection and fetch?
    // this.model.get('videos').doSearch( // trying for dataflow
    // clean up edge cases (don't waste searches) and send default search
    // for first run
      if (this.$videoSearch ==='' && searchTerms === ''){
        return;
      } else if (searchTerms === '') {
        searchTerms = this.$videoSearch.val();
        appModel.get('videos').fetch({ reset: true });
      } else {  // default for first run
        appModel.get('videos').fetch({ reset: true });
      }
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
  className: 'video-listing',
  template: Handlebars.compile($('#sidebar-vids-template').html()),
  events: {
    'click .video-listing': 'setOnStage'
  },
  initalize: function () {
    this.listenTo(this.model, 'on_stage', this.remove); // probably needs to be a class hide
  },
  setOnStage: function () {
    console.log('selected a vid for OnStage');
    this.model.set('on_stage, true');
    //TODO set other models on_stage to false.
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

// StageView create
// className: stage
// template: main-stage-template
// initialize: listen to videoModel change: onstage; refresh render
var StageView = Backbone.View.extend({
  className: 'stage',
  template: Handlebars.compile($('#main-stage-template').html()),
  events: {

  },
  initialize: function () {
    this.listenTo(this.model.get('videos'), 'change:on_stage', this.changeStageVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.changeStageVideo);
  },
  changeStageVideo: function () {
    console.log('changing stage video');
    this.model.get('videos').each(function (vid) { // find first onStage true
      if (vid.get('on_stage')) {
        // test in sidebar first
      }
      
    }, this);
  }
})


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