// AppView
// events: submit search  (select sidebar video in sidebar videos?) (do enterkey?)
// initialize: fill with default content?  listen for video model click?
// renderApp: fill .main-stage and trigger sidebarView

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit': 'performSearch',
    'keyup #video-search': 'checkSubmit'

  },

  initialize: function () {

    // this.listenTo(this.model.get('videos'), 'add', this.renderVideoEntry);
    this.$sidebarVids = this.$('.sidebar-vids');
    this.$videoSearch = this.$('#video-search');
    this.$mainStage = this.$('.main-stage');
    this.$mainDesc = this.$('.main-desc');


    // start app display default search
    this.$videoSearch.val(searchTerms);
    this.performSearch(); // to model?
    this.renderVideoList(); // to model?
    this.renderMainStage(); // to model?
    // when new search inits, re-render video list and main stage
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
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

  renderMainStage: function () {
    // var stageView = new StageView({  // wrong plavec
    //   model: video
    // });
    console.log('renderMainStage() in appView');
    this.$mainStage.empty();
    this.model.get('videos').each(function (vid) {
      if (vid.get('on_stage')) {
        console.log('find me my stage');
        // this.renderMainStage(vid);
      }
    }, this);
  },


  checkSubmit: function (e) { // to model?
    console.log($('#video-search').val());
    if (e.keyCode == 13) {
      this.performSearch()
    }
  },

  performSearch: function () { // to model?
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