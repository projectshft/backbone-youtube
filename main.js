AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'handleSearchClick',
    'click .thumbnail-click': 'handleThumbnailClick',
    'keyup #search-query': 'handleEnterKeyPress'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', function() {
      this.renderVideos();
      this.updateMainVideo();
    });

    this.listenTo(this.model, 'change:main_video', function () {
      this.renderMainVideo();
    });
  },

  handleSearchClick: function () {
    var searchQuery = this.$('#search-query').val();

    this.model.updateSearchQuery(searchQuery);

    this.$('#search-query').val('');
  },

  handleThumbnailClick: function (event) {
    var videoId = event.currentTarget.getAttribute('data-id');
    var videoToMain = this.model.get('videos').findWhere({videoId:videoId});

    this.model.updateMainVideo(videoToMain);
  },

  handleEnterKeyPress: function (e) {
    if(e.which === 13 && this.$('#search-query').val()) {
        this.$('.search').click();
    }
  },

  updateMainVideo: function () {
    var mainVideoView = this.model.get('videos').at(0);

    this.model.updateMainVideo(mainVideoView);
  },

  renderMainVideo: function () {
    this.$('.main-video-view').empty();

    var currentVideo = this.model.get('main_video');
    var mainVideoViewer = new MainVideoView({ model: currentVideo });
    
    this.$('.main-video-view').append(mainVideoViewer.render().el);
  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });

    this.$('.video-thumbnail-view').append(videoView.render().el);
  },

  renderVideos: function () {
    this.$('.video-thumbnail-view').empty();

    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
  }
});

MainVideoView = Backbone.View.extend({
  className: 'main-video',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});

VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-thumbnail-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'change:title', this.render);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      main_video: null,
      search_query: 'otters'
    };
  },

  initialize: function () {
    this.listenTo(this, 'change:search_query', this.updateUrl);
  },

  updateUrl: function() {
    this.get('videos').updateUrl(this.get('search_query'));
  },

  updateSearchQuery: function (searchQuery) {
    this.set('search_query', searchQuery);
  },

  updateMainVideo: function (mainVideo) {
    this.set('main_video', mainVideo);
  }
});

var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      videoId: '',
      imageUrl: ''
    }
  }
});

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=otters&type=video&videoEmbeddable=true&key=AIzaSyCOM9jNQ7zNmFDe7KPa3xoZ1KKCRrOp9oA',

  updateUrl: function (appModel) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + appModel + '&type=video&videoEmbeddable=true&key=AIzaSyCOM9jNQ7zNmFDe7KPa3xoZ1KKCRrOp9oA';

    this.fetch({ reset: true });
  },

  parse: function (response) {
    return response.items.map(function (video) {
      return {
        title: $('<textarea />').html(video.snippet.title).text(),
        description: $('<textarea />').html(video.snippet.description).text(),
        videoId: video.id.videoId,
        imageUrl: video.snippet.thumbnails.default.url
      }
    });
  }
});

var appModel = new AppModel();
var appView = new AppView({ model: appModel });
appModel.get('videos').fetch({ reset: true })

// var sampleData = {
//   "kind": "youtube#searchListResponse",
//   "etag": "jrLgj0XGHegO7nztkfHkqGu_dmo",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "US",
//   "pageInfo": {
//     "totalResults": 1000000,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "BJ_pZJtlXOdlNB7-r4tAl81I3C4",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "L5dM6NdZXd4"
//       },
//       "snippet": {
//         "publishedAt": "2021-01-17T16:00:09Z",
//         "channelId": "UCBvnS6nyNGAl8EUNt-40xoQ",
//         "title": "Josh Bridges 2021 CrossFit Open Prep + Dave Castro Gets Called Out | Paying the Man Ep.083",
//         "description": "The CrossFit season is just around the corner so I show you how I am preparing for the 2021 CrossFit Open. I also call out Dave Castro, to get him and I in a ring, ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/L5dM6NdZXd4/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/L5dM6NdZXd4/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/L5dM6NdZXd4/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Josh Bridges",
//         "liveBroadcastContent": "none",
//         "publishTime": "2021-01-17T16:00:09Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "JFhM06PZ2Ck-Tu0ZALY18QhBKog",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "vcDsh9Sjm18"
//       },
//       "snippet": {
//         "publishedAt": "2020-10-23T16:43:38Z",
//         "channelId": "UCRs1pHnES3QDdh43xbjOmzw",
//         "title": "Event 1 &amp; 2 - 2007 Reload and Corn Sack Sprint - 2020 CrossFit Games",
//         "description": "The hardest test in CrossFit Games history begins here. Five men. Five women. Three days of grueling competition. Grab snacks. #CrossFitGames The CrossFit ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/vcDsh9Sjm18/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/vcDsh9Sjm18/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/vcDsh9Sjm18/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "CrossFit Games",
//         "liveBroadcastContent": "none",
//         "publishTime": "2020-10-23T16:43:38Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "gW7BE77piDCVb3uIFDXHGyK1BNA",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "tzD9BkXGJ1M"
//       },
//       "snippet": {
//         "publishedAt": "2010-07-23T15:09:19Z",
//         "channelId": "UCtcQ6TPwXAYgZ1Mcl3M1vng",
//         "title": "What is CrossFit?",
//         "description": "What is CrossFit? CrossFit is an effective way to get fit. Anyone can do it. It is a fitness program that combines a wide variety of functional movements into a timed ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/tzD9BkXGJ1M/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/tzD9BkXGJ1M/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/tzD9BkXGJ1M/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "CrossFit®",
//         "liveBroadcastContent": "none",
//         "publishTime": "2010-07-23T15:09:19Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "8KgGsXPicxGt8j-2-OuRhutT9s4",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "860T3WYvyoc"
//       },
//       "snippet": {
//         "publishedAt": "2020-10-23T20:16:34Z",
//         "channelId": "UCRs1pHnES3QDdh43xbjOmzw",
//         "title": "Event 3 - CrossFit Total - 2020 CrossFit Games",
//         "description": "The wait is finally over. Watch the three-day finale of the 2020 CrossFit Games right here. Buckle up for an unforgettable weekend. Every event of the final stage ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/860T3WYvyoc/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/860T3WYvyoc/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/860T3WYvyoc/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "CrossFit Games",
//         "liveBroadcastContent": "none",
//         "publishTime": "2020-10-23T20:16:34Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "a53xv9Yh4o643yVpPbDCpFyCZIM",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "JZpVUNiSg5s"
//       },
//       "snippet": {
//         "publishedAt": "2020-12-28T18:09:41Z",
//         "channelId": "UCEQi1ZNJiw3YMRwni0OLsTQ",
//         "title": "I TRIED CROSSFIT FOR THE FIRST TIME",
//         "description": "Trying a crossfit workout for the first time with the @Buttery Bros BUTTERY BROS https://www.youtube.com/channel/UCp00ppkfPFBUTiiNNd8kS9Q BUTTERY ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/JZpVUNiSg5s/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/JZpVUNiSg5s/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/JZpVUNiSg5s/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Whitney Simmons",
//         "liveBroadcastContent": "none",
//         "publishTime": "2020-12-28T18:09:41Z"
//       }
//     }
//   ]
// }

// sampleData.items.forEach(function(video) {
//   appModel.get('videos').add({
//     title: video.snippet.title,
//     description: video.snippet.description,
//     videoId: video.id.videoId,
//     imageUrl: video.snippet.thumbnails.default.url
//   });
// });

// appView.renderVideos();
// appView.updateMainVideo();