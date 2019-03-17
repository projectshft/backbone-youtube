var appView = Backbone.view.extend({
  el:$('body'),

  events: {
    'click .viewVideo': 'displayVideo',

  },

  initialize: function(){
    this.$vidList = this.$('.vidList');
    this.listenTo(this.model.get('videoList'), 'add', this .renderVideo);
},

  displayVideo: function(vid){
    var clickedVid = $(vid.currentTarget.data().id;
    this.model.switchVideo(clickedVid);
  },

  renderVideo: function(){
    var listView = new ListView({ model: VideoModel });
    this.$vidList.append(listView.render().el);
  }
});
