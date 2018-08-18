AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #main-button': 'getData',
  },

  initialize: function() {

    this.$input = this.$el.find('#main-input')
    this.$videoPosts = this.$('#video-posts')

    console.log('initializing!');
    // console.log(this.model.get('videos')); // 'videos' is empty at this point

    // this.renderVideos();
    // this.listenTo(this.model.get('videos'), 'add', console.log('getting videos from collection' + this.model.get('videos')));
    // this.listenTo(this.collection, 'change', console.log('collection has changed!'));
    // this.listenTo(this.model, 'change:videos', console.log('model videos have changed'));
    // this.listenTo(this.model.set())

  },

//
//   $('#main-button').on('click', function () {
//   var appModel = new AppModel({ query: $('#search-input').val() });
//   var appView = new AppView({ model: appModel });
//
//   appModel.get('videos').fetch({reset: true});
// });

  getData: function () {
    var videos = new VideoCollection();
    videos.urlSearchAppender( this.$input.val() );
    // issue.on('change', function () { 'videos changing' + console.log(issue.toJSON()); });
    videos.fetch().then(function(){
      console.log( 'data came back' );
      console.log(videos)

    });
  },



  ////////// use the .each() function
  renderSidebar: function (video) {
    var sidebarView = new SidevarView({ model: VideoModel });
    this.$videoPosts.append(sidebarView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderSidebar(m);
    }, this);
  },

});
