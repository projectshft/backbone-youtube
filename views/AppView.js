var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search' : 'startFetch'
  },
//renders related videos when appModel current video changes
  initialize: function(){
    this.listenTo(this.model, 'change:current_video', this.renderRelated)
  },
  renderRelated: function(){
    $('.related-videos').empty();
    this.model.get('videos').forEach(function(item){
      if(item != appModel.get('current_video')){
        var relatedView = new RelatedView({model: item})
        $('.related-videos').append(relatedView.render().el)
      }
    })
    var videoView = new VideoView({model: appModel.get('current_video')})
    videoView.playVid();
      $('.video-desc').empty();
    $('.video-desc').append(videoView.render().el)
  },

  startFetch: function(){
    if (defaultSearch == false)
    {
    query = $('#search-query').val();
  }
    $('#search-query').val('');
    appModel.get('videos').fetch({
    success: function(collection, response) {
      response = response.items;
      response.forEach(function(item){
        var title = function(){
        if (item.snippet.title) {
          console.log('title is ' + item.snippet.title)
          return item.snippet.title
        }
        else {
          console.log('title not found')
          return null;
        }
        }
        var description = function(){
          if(item.snippet.description){
            console.log('the description is ' + item.snippet.description )
            return item.snippet.description;
          }
          else {
            console.log('description not found')
            return null
          }
        }
        var thumbnailUrl = function(){
          if(item.snippet.thumbnails.default.url){
            console.log("thumbnail is: " + item.snippet.thumbnails.default.url)
            return item.snippet.thumbnails.default.url
          }
          else{
            console.log('thumbnail not found')
            return null;
          }
        }
        var videoId = function(){
          if(item.id.videoId){
            console.log('video id is: ' + item.id.videoId )
            return item.id.videoId
          }
          else {
            console.log('id not found')
          }
        }

        var videoObj = {
          title: title(),
          description: description(),
          thumbnailUrl: thumbnailUrl(),
          videoId: videoId()
        };

      appModel.get('videos').add(videoObj);

      })
      //hack for now not sure why extra model is being created above and pushed into the collection
    var extraModel = appModel.get('videos').at(0)
    extraModel.destroy()
    appModel.set('current_video', appModel.get('videos').at(0))

  }
  });
  defaultSearch = false;
},
})
