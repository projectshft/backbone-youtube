// classes: .main-stage .sidebar-vids
// templates:  main-stage-template  sidebar-vids-template  main-desc-template
// handlebar madlibs: {{videoId}} {{title}}{{description}}{{thumb_url}}
// define globals
// var API_KEY = 'AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU';
var API_KEY = 'AIzaSyASOw5XMi4dPRhAs6V4b53svoyNA2FiKks';
// searchTerms global due to fetch() being difficult to pass args to
var searchTerms = 'Beck Loser';

// AppModel create
// defaults: create a video list collection. specify main stage video

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      on_stage: null,
    }
  },
});

// VideoModel create
// defaults: title description videoId thumbnail onstage/true/false

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
// set first response to onStage

var VideoCollection = Backbone.Collection.extend({
  url: function () {
    console.log('->VideoCollection fetch searchTerms: ', searchTerms);
    searchTerms = encodeURI(searchTerms);
    var theResponse = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchTerms + "&type=video&key=" + API_KEY;
    searchTerms = '';
    console.log(theResponse);
    return theResponse;
  },

  model: VideoModel,

  parse: function (response) {
    console.log('->VideoCollection response ', response);
    //strip off unneeded data then map() to what we do need
    response = response.items;

    console.log('parsing');

    return response.map(function (entry, index) {
      var onStage = false;
      // put first entry [0] on stage. other 4 stay in list
      if (!index) {
        onStage = true
      };
      return Object.assign({
        videoId: entry.id.videoId,
        title: entry.snippet.title,
        description: entry.snippet.description,
        thumb_url: entry.snippet.thumbnails.default.url,
        on_stage: onStage
      });
    }, this);
  }

});

// AppView create
// events: submit search  (select sidebar video in sidebar videos?) (do enterkey?)
// initialize: fill with default content?  listen for video model click?
// renderApp: fill .main-stage and trigger sidebarView

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit': 'performSearch'
  },

  initialize: function () {

    // this.listenTo(this.model.get('videos'), 'add', this.renderVideoEntry);
    this.$sidebarVids = this.$('.sidebar-vids');
    this.$videoSearch = this.$('#video-search');
    this.$mainStage = this.$('.main-stage');
    this.$mainDesc = this.$('.main-desc');
    // start app display default search
    this.performSearch();
    this.renderVideoList();
    // when new search inits, re-render video list and main stage
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
    this.listenTo(this.model.get('videos'), 'reset', this.renderMainStage);
    //TODO when mainStage is working
    // this.listenTo(this.model.get('videos'), 'reset', this.renderDetailsView);
  },
  // models created from collection fetch. now create views

  renderVideoList: function () {
    console.log('renderVideoList()');
    $('.sidebar-vids').empty();
    this.model.get('videos').each(function (vid) {
      this.renderVideoEntry(vid);
    }, this);
  },

  // create and render views of video listings
  renderVideoEntry: function (video) {
    console.log('renderVideoEntry()');
    // console.log('this videoEntry ', this);
    var videoView = new VideoView({
      model: video
    });
    this.$sidebarVids.append(videoView.render().el);
  },

  renderMainStage: function (video) {
    var stageView = new StageView({
      model: video
    });
    console.log('renderMainStage() in appView');
    $('.main-stage').empty();
    console.log('this is now ', this);
    var main = this.model.get('videos').findWhere({
      on_stage: true
    });
    console.log('main is ', main);
    // TODO seems like the perfect plan, but won't work. Needs binding?!?
    main.$mainStage.append(stageView.render().el);
  },

  renderDetailsView: function (video) {
    //TODO or combo with renderMainStage
    /*     console.log('renderDetailsView in appView');
        var detailsView = new DetailsView({ model: video});
        this.$mainDesc.append(detailsView.render().el); */
  },

  performSearch: function () {
    console.log('performSearch() with ', this.$videoSearch.val());
    console.log('versus global ', searchTerms);
    // send search terms to collection (via global) and fetch
    // this.model.get('videos').doSearch( // trying for dataflow but no-go
    // clean up edge cases (don't waste searches) OR send default search
    // for first run
    if (this.$videoSearch === '' && searchTerms === '') {
      return;
    } else if (searchTerms === '') {
      searchTerms = this.$videoSearch.val();
      appModel.get('videos').fetch({
        reset: true
      });
    } else { // default for first run
      appModel.get('videos').fetch({
        reset: true
      });
    }
  },

  renderOnStage: function () {
    console.log('renderOnStage()');
    // when VideoModel changes to "on_stage true" refresh
  }
});

// VideoView create
// className: video-listing
// template: sidebar-vids-template
// TODO events click - not working

var VideoView = Backbone.View.extend({
  className: 'video-listing',
  template: Handlebars.compile($('#sidebar-vids-template').html()),
  events: {
    'click .video-listing': 'setOnStage'
  },

  initalize: function () {
    console.log('videoView inits');
    this.listenTo(this.model, 'on_stage', this.switchMain); // needs to toggle class visibilty (.d-none)
  },

  setOnStage: function () {
    console.log('selected a vid for OnStage');
    this.model.set('on_stage, true');
    //TODO set other models on_stage to false.
  },

  switchMain: function () {
    //TODO
  },

  render: function () {
    // hide the current video because it's on the main stage
    if (this.model.get('on_stage')) {
      console.log('detected on_stage');
      this.$el.html(this.template(this.model.toJSON())).addClass('d-none');
    }
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

// StageView create
// className: stage
// template: #main-stage-template
// initialize: listen to videoModel change: onstage; refresh render

var StageView = Backbone.View.extend({
  className: 'stage',

  template: Handlebars.compile($('#main-stage-template').html()),

  /* initialize: function () {
    this.listenTo(this.model.get('videos'), 'change:on_stage', this.changeStageVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.changeStageVideo);
  },

  changeStageVideo: function () {
    console.log('changing stage video');
    //replace with findwhere
    this.model.get('videos').each(function (vid) { // find first onStage true
      if (vid.model.get('on_stage')) {
        console.log('found featured video');
      }
      }, this);
  }, */

  render: function () {
    console.log('render main stage');
    console.log('mainView render this is ', this);
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

// DetailsView create
// className: details
// template: #main-details-template
// initialize: listen to videoModel change: onstage, trigger render

var DetailsView = Backbone.View.extend({
  className: 'details',

  template: Handlebars.compile($('#main-details-template').html()),
  // should pattern same as main view - render findwhere result from appView
  render: function () {
    console.log('render details view');
    if (this.model.get('on_stage')) {
      console.log('detected on_stage');
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      return null;
    }
    return this;
  }
});


// kickoff logic
// new AppModel()
// new AppView from AppModel
// populate default search and API_KEY

var appModel = new AppModel();
var appView = new AppView({
  model: appModel
});