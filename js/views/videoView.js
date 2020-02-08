var VideoView = Backbone.View.extend({

  $elLarge:$('.large-video'),

  $el:$(".video-list"),

  initiate:function(){
    this.listenTo(this.model.get('current_video'), 'reset', this.removeVideos);
  },

  removeVideos:function(){
    this.remove()
  },

  template: Handlebars.compile($('#video-template').html()),

  templateLarge: Handlebars.compile($('#video-large-template').html()),

  render: function(video) {

    if (video === appModel.toJSON().current_video){
      console.log('large video view rendered')
      this.$elLarge.html(this.templateLarge(this.model.toJSON()))

    }else{
      this.$el.html(this.template(this.model.toJSON()))
    }
    return this;
  }
});
