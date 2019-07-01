//Model that holds data for each individual video
//Only saving information relevant to the evaluation
var VideoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    video_id: '',
    description: '',
    img_url: ''
  }
})
