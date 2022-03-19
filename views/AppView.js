var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
  },

  events: {
    'click .search': 'vidSearch',
    'click .vidLink': 'setVideo',
    'keyup #search-input': 'keyPressEventHandler'
  },
  
  keyPressEventHandler : function(event){
    if(event.keyCode == 13){
        this.$('.search').click();
    }
},

  setVideo: function (e) {
    this.model.setCurrentVideo($(e.currentTarget).data().id);
  },

  videoView: null,

  vidSearch: function () {
    var query = this.$('#search-input').val();
    this.model.get('videos').setUrl(query);

    this.model.get('videos').fetch({reset: true}).done(function() {

    });
  },

  renderCurrentVideo: function () {
    this.$('.video').empty();
    var newVideo = this.model.get('currentVideo');
    var newVideoView = new VideoView({model: newVideo})
    var vidHTML = newVideoView.render().el;
    $('.video').append(vidHTML);
    
  },
  
  renderVideoList: function () {
    this.$('.video-list').empty();
    var newList = this.model.get('videos').models;
    for (let j = 0; j < newList.length; j++) {
      const newSearch = newList[j];
      var newVidList = new VideoListView({model: newSearch})
      var listHTML = newVidList.render().el;
      $('.video-list').append(listHTML);
    }
    
  }
})