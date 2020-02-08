var VideoView = Backbone.View.extend({

  $elLarge:$('.large-video'),

  $el:$(".video-list"),

  initialize:function(){

  },

  template: Handlebars.compile($('#video-template').html()),

  templateLarge: Handlebars.compile($('#video-large-template').html()),

  render: function(video) {

    if (video === appModel.toJSON().current_video){
      this.$elLarge.html(this.templateLarge(this.model.toJSON()))

    }else{
  //  if (video === )
      this.$el.html(this.template(this.model.toJSON()))
    }
    return this;
  }
});
