var AppView = Backbone.View.extend({
  el: $('body'),

  events:{
    'keypress .search-input': 'searchVideo'
  },

  initialize: function(){
    key = 'key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs';
    // var query = this.$('.search-input').val();
  },
  searchVideo: function(e){
    var query = this.$('.search-input').val();
    if(e.which ===13 && query.length > 0){

      console.log(this.model);
    // this.videos.set({url: 'https://www.googleapis.com/youtube/v3/search?part=snippet'+ query + key}),
    // this.videos.fetch({reset: true});
  };
},

});
