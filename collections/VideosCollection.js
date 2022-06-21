
//    const VideosCollection = Backbone.Collection.extend({
//   model: VideoModel,
//   url: '', 

//   addVideo: function (title, description, thumbnail, videoId) {
//     this.add({
//       title: title,
//       description: description,
//       thumbnail: thumbnail,
//       videoId: videoId
//       })
//   }
// });
//will this code work???

// collection.fetch({ data: $.param({ someParam: 12345}) });
// In your case, along the lines of.

// var Widget = Backbone.Model.extend({
//     initialize: function(options) {
//         this.name = options.name;        
//     },
//     urlRoot: '/widgets',
//     fetchByName: function(){ 
//         this.fetch({ data: $.param({ name: this.name }) }) 
//     }
// });

// var foowidget = new Widget({name: 'Foo'});
// foowidget.fetchByName();

// fetch: function (query) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=AIzaSyDJP_kbSFYteTAEL6Dao64hwbagEOuZT_c`,
//     dataType: "json",
//     success: function (data) {
//       console.log('Received data:', data)
//       addVideos(data)      
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//      console.log(textStatus);
//     }
//   })
// },
 
// renderVideoResults: function () {
//   $('#video-column').empty();
   
//     for (var i = 0; i < videoResults.length; i++) {
//       const result = videoResults[i];
 
//      var source = $('#video-template').html();
//      var template = Handlebars.compile(source);
//      var newHTML = template(result);
 
//      $('#videos-column').append(newHTML);
//    }
//   }
// }); 
