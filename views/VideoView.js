var CurrentVideoView = Backbone.View.extend({

  className:'current-video',

  template:Handlebars.compile($("#current-player").html()),

  // events:{
  //   'click .select': 'selectCurrentVideo'
  // },
//need to determine who to listen to in order to set the current video
  initialize:function(){

  },
  renderCurrentHTML:function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this
  }
})
