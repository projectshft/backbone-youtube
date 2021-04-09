var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': 'updateCurrentQuery',
    'keypress #search-bar': 'enterHandler'
  },

  initialize: function (){
    //this.listenTo(this.model.get('videos').url, 'change', this.render);
    this.render();
  },

  updateCurrentQuery: function () {
    var query = this.$('#search-bar').val();
    this.model.changeCurrentQuery(query);
    this.$('#search-bar').val('')
  },

  enterHandler: function (e) {
    if (e.which === 13) {this.updateCurrentQuery()}
  },

  pageLoadRender: function () {
    
  },

  render: function () {
    console.log(this.model.get('videos'))
    //var playerView = new PlayerView({ model: video });
    //console.log(playerView.model)
    // the 'append' below works, tried it with hard code
    //this.$('.main-video-container').append(playerView.render().el);
  }
});