// AppView
// events: submit search  (select sidebar video in sidebar videos)
// initialize: fill with default content  listen for video model click
// renderApp: fill .main-stage and trigger sidebarView

var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click .video-listing": "setOnStage",
    "keyup #video-search": "checkSubmit",
  },

  initialize: function () {
    // this.listenTo(this.model.get('videos'), 'add', this.renderVideoEntry);
    this.$sidebarVids = this.$(".sidebar-vids");
    this.$videoSearch = this.$("#video-search");
    this.$mainStage = this.$(".main-stage");
    this.$removeMe = this.$(".remove-me");
    this.$mainDesc = this.$(".main-desc");

    // start app display default search
    this.$videoSearch.val(fallbackSearchTerms);

    // Start up app with a default search to populate screen
    this.setSearch();
    this.goSearch();
    this.renderVideoList();
    // when new search inits, re-render video list and main stage
    // TODO listen to change in SearchTerms
    this.listenTo(this.model.get("videos"), "reset", this.renderVideoList);
    this.listenTo(this.model, "change", this.goSearch);
  },

  // models created from collection fetch. now create views

  renderVideoList: function () {
    console.log("renderVideoList()");
    this.$sidebarVids.empty();
    this.model.get("videos").each(function (vid) {
      this.renderVideoEntry(vid);
      if (vid.get("on_stage")) {
        console.log("find me my stage");
        this.renderOnStage(vid);
      }
    }, this);
  },

  // create and render views of video listings
  renderVideoEntry: function (video) {
    console.log("renderVideoEntry()");
    var videoView = new VideoView({
      model: video,
    });
    this.$sidebarVids.append(videoView.render().el);
  },

  renderOnStage: function (video) {
    console.log("renderOnStage()");
    this.$mainStage.empty();
    this.$removeMe.empty();
    var stageView = new StageView({
      model: video,
    });
    this.$mainStage.append(stageView.render().el);
    // when VideoModel changes to "on_stage true" refresh
    console.log("RenderOnStage video is: ", video);
  },

  checkSubmit: function (e) {
    console.log($("#video-search").val());
    if (e.keyCode == 13) {
      this.setSearch();
    }
  },

  setSearch: function () {
    console.log("setSearch() with ", this.$videoSearch.val());
    // clean up edge cases (don't waste searches) OR send default search
    // for first run
    if (this.$videoSearch === "" && this.model.get("search_terms") === "") {
      return; // don't do a blank search
    } else if (this.$videoSearch === this.model.get("search_terms")) {
      return; // don't do a duplicate search
    } else if (this.model.get("search_terms") === "") {
      this.model.set("search_terms", fallbackSearchTerms);
    } else {
      // default for first run
      this.model.set("search_terms", this.$videoSearch.val());
      console.log(
        "Appmodels search_terms attr ",
        this.model.get("search_terms")
      );
    }
  },

  goSearch: function () {
    appModel.get("videos").fetch({
      reset: true,
    });
  },

  // change featured
  setOnStage: function (e) {
    console.log("SetOnStage() in AppView");
    console.log("this.model ", this.model);
    var clickedVideoId = $(e.currentTarget).find("table").data().id;
    console.log("->extracted data", clickedVideoId);
    this.model.set("on_stage, true");

    // look for videoID match and set on_stage to true, otherwise false

    console.log("rendering new video-list");
    this.$sidebarVids.empty();
    this.model.get("videos").each(function (vid) {
      this.renderVideoEntry(vid);
      if (vid.get("videoId") === clickedVideoId) {
        vid.set("on_stage", true);
      } else {
        vid.set("on_stage", false);
      }
      if (vid.get("on_stage")) {
        console.log("find me my stage");
        this.renderOnStage(vid);
      }
    }, this);
  },
});
