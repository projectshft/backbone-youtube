var SearchView = Backbone.View.extend({

  el:$('#search'),

  initialize: function(){
    console.log("initialize");
  },

  events:{
    'blur': 'search'
  },
  search:function(e){
// Hardcodes the default search to make the first "Radcliffe" video to show up.
    var keyword = e ? e.target.value : "Radcliffe";

    newSearch = new SearchModel();
    newSearch.url = newSearch.url + keyword;
    newSearch.fetch({
      //enables the display of search button, main video and related videos.
        success: function(response,xhr) {
          this.$search = this.$('#search');
          this.$video = this.$('#video');
          this.$videoList = this.$('.video-list');
        //  console.log("Inside Success");
          var videoResponse = response.attributes.items[0];
        //  console.log('Here are the results');
          console.log(newSearch.attributes);
          videoResponse = newSearch.attributes.items[0];
          var video = new VideoModel();
          video.id = videoResponse.id.videoId;
          console.log(video.id);
          video.title = videoResponse.snippet.title;
          console.log(video.title);
          video.description = videoResponse.snippet.description;
          console.log(video.description);
          var videoView = new VideoView({ model: video });
          this.$video.append(videoView.render().el);
          var videosCollection = new VideosCollection();
          var videoList = response.attributes.items;
          var videoListView = new VideoListView({ collection: videoList });
          this.$videoList.append(videoListView.render().el);
      },
      error: function(errorResponse){
        console.log(errorResponse);
      }
      });
  }

});
