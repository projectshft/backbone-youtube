var VideoModel = Backbone.Model.extend({
  defaults() {
    return {
      id: null,
      channel: null,
      title: null,
      thumbnailUrl: null,
      description: null,
      mainPlayer: false
    }
  },

  toggleMainDisplay(newCurrentVideoId) {
    this.collection.each((video) =>{
      video.set('mainPlayer', false);
       if (video.get('id') === newCurrentVideoId){
         video.set('mainPlayer', true);
         return
       }
    })
  }
})