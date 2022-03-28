
var VideoCollection = Backbone.Collection.extend({
  
  // url: function(userInput){
  //   var url =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.userInput}&type=video&videoEmbeddable=true&key=AIzaSyCuZkTkLT7pAbGYodRnTSHgzDYtty53nwU`;
  //   return url;
  // },
  url: '',
  
  
  model: VideoModel,
 
  initialize: function(){

  },
  
  parse: function(data) {
    return data.items.map((video) => {
      return {
        url: video.snippet.thumbnails.default.url,
        title: video.snippet.title,
        describtion: video.snippet.describtion
      };
    });
  }
});

var videoCollection = new VideoCollection();

videoCollection.on('change:userInput', function(){
  this.fetch().then(function(){
    console.log(this);}
    )
  });




