var AppView = Backbone.View.extend({

    el: $('body'),
  
    events: {
      'click .search-videos': 'createVideo'
      //'click .video': 'changeMainVideo'
    },

    initialize: function () {
        this.$searchInput = this.$('#search-input');
        this.$videoList = this.$('.video-list');

        this.listenTo(this.model.get('videos'), 'add', this.renderListVideo);
        this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
        this.listenTo(this.model.get('videos'), 'reset', this.renderListVideos);

        this.renderListVideos; 
    }, 

    renderPage: function () {
        console.log("render page"); 
    }, 

    createVideo: function () {
        var query = this.$searchInput.val(); 
        console.log(query);
        this.$searchInput.val(''); 

        // this.model.get('videos').addVideo(
        //     'cat video',
        //     'cute cats playing',
        //     'hY7m5jjJ9mM',
        //     'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg'
        // );

    },

    renderListVideo: function (video) {
        console.log("render list video");
        var listVideoView = new ListVideoView({model: video});
        this.$videoList.append(listVideoView.render().el); 
    }, 

    renderListVideos: function () {
        console.log("render list videos");
        this.model.get('videos').each(function (m) {
            this.renderListVideo(m);
          }, this);
    }
});