/*********************************************
 * Render App View (global, top-of-hierchy)
 * ******************************************/

const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'searchVideos',
    'keypress #search-bar': 'searchVideos',
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

    this.listenTo(
      this.model.get('videos'),
      'reset',
      this.renderVideoList,
      this.renderFeaturePlayerView
    );
  },
  // this.renderVideoList();

  // initialize: function() {
  //   this.model.get('videos').getVideos(this.model.get('query'));
  //   this.listenTo(
  //     this.model,
  //     'change:feature_video',
  //     this.renderFeaturePlayerView
  //   );
  //   this.listenTo(this.model.get('videos'), 'reset', function() {
  //     this.renderFeaturePlayerView();
  //     this.renderVideoList();
  //   });
  // },

  renderSelectedVideo: function(e) {
    let selectedVideo = $(e.currentTarget).data().id;
    console.log('selectedVideo = ', selectedVideo);
    this.model.changeFeature(selectedVideo);
    // this.model.set('feature_video', selectedVideo);
  },

  searchVideos: function(e) {
    if (e.which === 13 || e.type === 'click') {
      // Set a variable to the value of the user's search
      let query = $('#search-bar').val();
      if (query === '') {
        // Error handling to account for an empty search query
        alert('Please enter a search word or phrase.');
      } else {
        // Set the query attribute
        this.model.set('query', query);
        this.model.get('videos').getVideos(this.model.get('query'));
      }
      this.$('#search-bar').val('');
      // query == '';
    }
  },

  renderVideo: function(VideoModel) {
    // this.$moreVideos.remove();
    let listView = new ListView({ model: VideoModel });
    this.$moreVideos.append(listView.render().el); // $moreVideos???
  },

  renderVideoList: function() {
    this.$el.find('.more-videos').empty();
    // this.$('.more-videos').empty();
    this.model.get('videos').each(function(m) {
      // "m" from Beer-Reviews code
      this.renderVideo(m);
    }, this);
  },

  renderFeaturePlayerView: function() {
    // if (this.featurePlayerView) {
    //   this.featurePlayerView.remove();
    // }
    this.featurePlayerView = new FeaturePlayerView({
      // let featurePlayerView = new FeaturePlayerView({
      model: this.model.get('feature_video')
      // model:
      //   this.model.get('feature_video') || this.model.get('videos').models[0]
    });

    // this.featurePlayerView = this videoList.shift;
    this.$('.yt-player-container').append(this.featurePlayerView.render().el);
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
