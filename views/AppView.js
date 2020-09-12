// AppView
// events: submit search  (select sidebar video in sidebar videos?) (do enterkey?)
// initialize: fill with default content?  listen for video model click?
// renderApp: fill .main-stage and trigger sidebarView

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    // 'click .submit': 'performSearch',   // obsoleted
    // 'click .video-listing': 'setOnStage', // trying to get this to work (move to video?)
    'keyup #video-search': 'checkSubmit'
  },

  initialize: function () {

    // this.listenTo(this.model.get('videos'), 'add', this.renderVideoEntry);
    this.$sidebarVids = this.$('.sidebar-vids');
    this.$videoSearch = this.$('#video-search');
    this.$mainStage = this.$('.main-stage');
    this.$removeMe = this.$('.remove-me');
    this.$mainDesc = this.$('.main-desc');


    // start app display default search
    this.$videoSearch.val(fallbackSearchTerms);

    // Start up app with a default search to populate screen
    // note to self: seems appropriate funcs for view
    this.setSearch();
    this.goSearch();
    this.renderVideoList();
    // this.renderMainStage();

    // when new search inits, re-render video list and main stage
    // TODO listen to change in SearchTerms
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
    this.listenTo(this.model, 'change', this.goSearch);
    // DANGER this.listenTo(this.model.get('videos'), 'reset', this.renderMainStage);
    //TODO when mainStage is working
    // this.listenTo(this.model.get('videos'), 'reset', this.renderDetailsView);
  },

  // models created from collection fetch. now create views

  renderVideoList: function () {
    console.log('renderVideoList()');
    this.$sidebarVids.empty();
    this.model.get('videos').each(function (vid) {
      this.renderVideoEntry(vid);
      if (vid.get('on_stage')) {
        console.log('find me my stage');
        this.renderOnStage(vid);
      }
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

  renderOnStage: function (video) {
    console.log('renderOnStage()');
    this.$mainStage.empty();
    this.$removeMe.empty();
    var stageView = new StageView({
      model: video
    });
    this.$mainStage.append(stageView.render().el);
    // when VideoModel changes to "on_stage true" refresh
    console.log('RenderOnStage video is: ', video);
  },

  checkSubmit: function (e) { // to model?
    console.log($('#video-search').val());
    if (e.keyCode == 13) {
      this.setSearch()
    }
  },

  setSearch: function () {
    console.log('setSearch() with ', this.$videoSearch.val());
    // clean up edge cases (don't waste searches) OR send default search
    // for first run
    if (this.$videoSearch === '' && this.model.get('search_terms') === '') {
      return; // don't do a blank search
    } else if (this.$videoSearch === this.model.get('search_terms')) {
      return; // don't do a duplicate search
    } else if (this.model.get('search_terms') === '') {
      this.model.set('search_terms', fallbackSearchTerms);
    } else { // default for first run
      this.model.set('search_terms', this.$videoSearch.val());
      console.log('Appmodels search_terms attr ', this.model.get('search_terms'));
    }
  },

  goSearch: function () {
    appModel.get('videos').fetch({
      reset: true,
      // error: videos.badFetch 
    })
  },

  //not able to trigger this
  setOnStage: function (test) {
    console.log('SetOnStage() in AppView');
    console.log('this.model ', test);
    this.model.set('on_stage, true');
    var compare = this.model.id;
    console.log('wanting to get id: ', compare);
    this.model.get('videos').each(function (vid) {
      console.log(vid);
    }, this);
    //TODO set other models on_stage to false.
  }


});