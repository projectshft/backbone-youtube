AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #main-button': 'getData',
  },

  initialize: function() {

    this.$input = this.$el.find('#main-input')
    this.$videoPosts = this.$('#video-posts')

    console.log('initializing!');
    console.log(this.model.get('videos')); // 'videos' is empty at this point

    // this.renderVideos();
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    // this.listenTo(this.model, 'change:title', console.log('VideoModel changed!'));
    this.listenTo(this.collection, 'change', this.renderOnPage);

  },

  getData: function () {
    var issue = new VideoCollection();
    issue.urlSearchAppender( this.$input.val() )
    issue.fetch().then(function(){
      console.log( 'data came back' );
      console.log(issue)


       // put something in this function
    });
  },

  renderOnPage: function (returnedData) {
    console.log(returnedData)
  },



  ////////// use the .each() function
  // renderSidebar: function (video) {
  //   var sidebarView = new SidevarView({ model: VideoModel });
  //   this.$videoPosts.append(sidebarView.render().el);
  // },
  //
  // renderVideos: function () {
  //   this.model.get('videos').each(function (m) {
  //     this.renderSidebar(m);
  //   }, this);
  // },

  renderVideo: function (beer) {
    console.log(beer);
  }





});
