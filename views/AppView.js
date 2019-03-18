/*********************************************
 * Render App View (global, top-of-hierchy)
 * ******************************************/

let AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    // 'click .btn': 'goSearch',
    'keypress .search': 'updateOnEnter',
    'click .video-selection': 'renderSelectedVideo'
  },

  initialize: function() {
    this.$moreVideos = this.$('.more-videos');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

    this.listenTo(
      this.model,
      'change:feature_video',
      this.renderFeaturePlayerView
    );

    this.listenTo(this.model, 'change:searchKeywords', this.updateUrl);

    this.listenTo(
      this.model.get('videos'),
      'reset',
      this.renderVideoList,
      this.renderFeaturePlayerView
    );

    this.renderVideoList();

    //shift???
  },

  // doSearch: function(e) {
  //   e.preventDefault();
  //   //See Notes
  //   // collect value from search field and trigger search; clear search field
  // },

  renderSelectedVideo: function(selected) {
    let selectedVideo = $(selected.currentTarget).data().id;
    this.model.changeFeature(selectedVideo);
  },

  //   // updateUrl: function () {
  //
  // }

  renderVideo: function(VideoModel) {
    let listView = new ListView({ model: VideoModel });
    this.$moreVideos.append(listView.render().el);
  },

  renderVideoList: function() {
    this.model.get('videos').each(function(m) {
      // "m" from Beer-Reviews code
      this.renderVideo(m);
    }, this);
  },

  renderFeaturePlayerView: function() {
    if (this.featurePlayerView) {
      this.featurePlayerView.remove();
    }
    this.featurePlayerView = new FeaturePlayerView({
      model: this.model.get('current_feature')
    });

    // this.featurePlayerView = this videoList.shift;
    this.$('.youtube-player').append(this.featurePlayerView.render().el);
  }
});

/************************************
 *  FROM TUTORIAL
 * **************************** */

// // VIEW
// var ourView = Backbone.View.extend({

//     // Listen for click event
//     events : {
//         "click" : "clickHandler"
//     },

//     initialize : function() {

//         // Bind click event
//         this.on('click', this.clickHandler);
//     },

//     // The view render
//     render: function() {
//         this.$el.html("<div id='square' />");
//     },

//     // The click handler
//     clickHandler : function(event) {

//         // Verify click is being handled
//         console.log('click handled');
//     }
// });

// // Initiate view
// var view = new ourView();

// // Append to view to document body
// view.$el.appendTo(document.body);

// // FIRE
// view.render();

// </script>
