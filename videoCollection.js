var VideoModel = Backbone.Model.extend({
  defaults: {

  }
})

var YoutubeVid = Backbone.Model.extend({
  defaults: {
    id: 0,
    title: '',
    state: ''
  }
});

var YoutubeVidsList = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC6RFkUeKmw8F_wm1Oj3i1WO0ReLI7FroU&part=snippet&format=5&rel=0&fs=0&maxResults=5&q=cat',
  model: YouTubeVid
});

var videoList = new YoutubeVidsList();
issues.on('add', function () { console.log(issues.toJSON()); });
issues.fetch();
