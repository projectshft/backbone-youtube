var VideoView = Backbone.View.extend({

	events: {
		'click  .img-container': 'changeCurrentVideo',
	},

  template: Handlebars.compile($('#video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
        //console.log('this is the video model', this.model.toJSON());
    return this;
  },

  changeCurrentVideo: function(){
    //change current video selected flag 
    let currentVideo = appModel.get('videos').findWhere({selectedVideo:true})
    if (currentVideo){
      	currentVideo.set('selectedVideo', false);
    }
    //change clicked video selectedVideo to true
    this.model.set('selectedVideo', true);
  }


});