AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #main-button': 'getData',
  },

  initialize: function() {

    this.$input = this.$el.find('#main-input')
    this.$videoPosts = this.$('#video-posts')

    console.log('initializing!');

    this.listenTo(this.collection, 'reset', console.log('reset is TRUE!'));

  },

  getData: function () {
    // query: $('#main-input').val()

    var appModel = new AppModel(); // my input.val() needs to go inside of AppModel({ HERE })
    var appView = new AppView({ model: appModel });
    // appModel.get('videos').
    appModel.get('videos').fetch({reset: true});

    // modelVideos.urlSearchAppender( this.$input.val() );
    // modelVideos.fetch({reset: true}).then(function(){
    //   console.log( 'data came back' );
    //   console.log(modelVideos)
    // });
  },

  // ////////// use the .each() function
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

});
