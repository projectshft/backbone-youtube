var RelatedVideosView = Backbone.View.extend({
  className: 'related-video py-1',

  template: Handlebars.compile($('#related-videos-template').html()),

  events:{
    'click .related': 'queryThis',
  },

  //renders related video to current video
  queryThis: function(){
    /* I know I probably shouldn't call appView directly */
    appView._renderCurrentVideo(this.model);
  },

  render: function () {
    let attributes = this.model.toJSON()

    if(attributes.title.length>40){
      attributes.title = attributes.title.split('').slice(0,40).join('')
      attributes.title+=' ...'
    }
  
    this.$el.html(this.template(attributes));

    return this;
  }
})
