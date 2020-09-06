console.log('inVideosCollection');

var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leafy+seadragon&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q',

  createUrl: function (searchTerm) {
    var searchTermTrimmed = searchTerm.trim().split(' ').join('+');
    var newUrl =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      searchTermTrimmed +
      '&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q';
    console.log(newUrl);
    var newVideosCollection = new VideosCollection();
    console.log(newVideosCollection.get('url'));
    return newUrl;
  },

  findThumbnails: function (thumbnailsArray) {
    //grab the ID of the current video to compare to other videos' IDs
    // console.log('incollection to find thumbnails.logging current video thumbnail');
    // console.log(appModel.get('current_video')[0].thumbnail);
    var thumbnailOfCurrentVideo = appModel.get('current_video')[0].thumbnail;
    var allVideosArray = this.models;

    //push all videos that do not have same ID as current video to thumbnails array
    for (var i = 0; i < allVideosArray.length; i++) {
      if (allVideosArray[i].attributes.thumbnail !== thumbnailOfCurrentVideo) {
        thumbnailsArray.push(allVideosArray[i].attributes);
      }
    }
    // console.log(thumbnailsArray);
    return thumbnailsArray;
  },

  showNewVideo: function (clickedVideoThumbnail) {
    console.log('in collections showNewVideo');
    var allModels = this.models;
    console.log(clickedVideoThumbnail);
    console.log('that was clickedthumbnail');

    for (var i = 0; i < allModels.length; i++) {
      // console.log(i);
      // console.log(allModels[i].attributes.thumbnail);
      // console.log(clickedVideoThumbnail);
      if (allModels[i].attributes.thumbnail == clickedVideoThumbnail) {
        var arrayForNewCurrentVideo = [];
        arrayForNewCurrentVideo.push(allModels[i].attributes);
        // console.log('the new array for current video');
        // console.log(arrayForNewCurrentVideo);
        appModel.set({ current_video: arrayForNewCurrentVideo });
      }
      // } else {
      //   console.log('not a match!');
      // }
    }
  },

  parse: function () {
    console.log('in parse funtion');
    var response = [
      {
        kind: 'youtube#searchListResponse',
        etag: 'draC5DJuPYpHt3egeR_mCjjlLfQ',
        nextPageToken: 'CAUQAA',
        regionCode: 'US',
        pageInfo: {
          totalResults: 119837,
          resultsPerPage: 5,
        },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: '9vfAypwnSeWpC882ZthABZy-K90',
            id: {
              kind: 'youtube#video',
              videoId: 'YFFGtxw1BYw',
            },
            snippet: {
              publishedAt: '2015-03-11T16:38:06Z',
              channelId: 'UCv-GKfqJyNxA1h1lOGcBmiQ',
              title: 'Kayaking Thru Florida Mangrove Tunnels',
              description:
                "In today's vlog, Jesse and I kayak to an island and through mangrove tunnels. Thanks to Sail Honeymoon Island Rentals for the kayaks.",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/YFFGtxw1BYw/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/YFFGtxw1BYw/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/YFFGtxw1BYw/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'BixbyFilms',
              liveBroadcastContent: 'none',
              publishTime: '2015-03-11T16:38:06Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'CupyGoCO07IGdv8Mr_vfAR4WfKY',
            id: {
              kind: 'youtube#video',
              videoId: 'sOxwpDi7fcA',
            },
            snippet: {
              publishedAt: '2019-07-14T10:01:28Z',
              channelId: 'UCgD5ehWXngIgAoKmZwHvKdw',
              title: 'Kayaking at the Eastern Mangroves Park in Abu Dhabi',
              description:
                "Did you know there's a underwater forest in Abu Dhabi? Go kayaking at Anantara Eastern Mangroves to explore this natural wonder...",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/sOxwpDi7fcA/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/sOxwpDi7fcA/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/sOxwpDi7fcA/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'insydo',
              liveBroadcastContent: 'none',
              publishTime: '2019-07-14T10:01:28Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'iedy7rzWw9RaFX1vFU1XOA_33W8',
            id: {
              kind: 'youtube#video',
              videoId: 'ECT47agurwY',
            },
            snippet: {
              publishedAt: '2018-11-08T14:40:02Z',
              channelId: 'UCorP3yfmodvg8xJEaQormsA',
              title:
                'Crocodile, kayaking in the mangroves, Lower Matecumbe Key, FL',
              description:
                "Paddling with an 8' crocodile while in the mangrove tunnels of Lower Matecumbe Key, FL.",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/ECT47agurwY/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/ECT47agurwY/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/ECT47agurwY/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Joe Brennan',
              liveBroadcastContent: 'none',
              publishTime: '2018-11-08T14:40:02Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'vNf_nEsBWqBiJpnomwMq-2nA2iA',
            id: {
              kind: 'youtube#video',
              videoId: 'kTQY6FyDZmU',
            },
            snippet: {
              publishedAt: '2020-03-20T20:40:00Z',
              channelId: 'UCd3-gAXU6zhX2RWFrb0eSYw',
              title:
                'Exploring Backwater Mangroves On New Kayak - Old Town 106 Powered By Minn Kota',
              description:
                'In this video I went exploring backwater mangroves searching for big fish! I plan to come back to this place to do some backwater mangrove exploring again ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/kTQY6FyDZmU/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/kTQY6FyDZmU/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/kTQY6FyDZmU/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Fishing With YakPak',
              liveBroadcastContent: 'none',
              publishTime: '2020-03-20T20:40:00Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'K0BqJBavyZ5btq4wuuq1kJAgxg8',
            id: {
              kind: 'youtube#video',
              videoId: 'UB8wuzmr1Ds',
            },
            snippet: {
              publishedAt: '2017-01-05T16:52:14Z',
              channelId: 'UCmxCGomTdydQ4o8CEqsR_uw',
              title: 'Kayaking in Krabi mangrove forest with a monkeys',
              description:
                'The last day in Krabi, Thailand we spent kayaking in mangrove forest. Few monkeys come to say hello! Hope you enjoyed Krabi trip. Later on I will upload some ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/UB8wuzmr1Ds/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/UB8wuzmr1Ds/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/UB8wuzmr1Ds/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Mantas Jarusevicius',
              liveBroadcastContent: 'none',
              publishTime: '2017-01-05T16:52:14Z',
            },
          },
        ],
      },
    ];

    return response.map(function (b) {
      var videosCollection =
        appModel.get('videosCollection') || new VideosCollection();
      videosCollection.set(b.videosCollection);
      b.videosCollection = videosCollection;

      return Object.assign(
        {
          title: b.items[0].snippet.title,
          description: b.items[0].snippet.description,
          id: b.items[0].id.videoId,
          thumbnail: b.items[0].snippet.thumbnails.default.url,
          youtubeEmbedUrl:
            'https://www.youtube.com/embed/' + b.items[0].id.videoId,
        },
        b
      );
    }, this);
  },
});

console.log('leaving videos collection');

// var newVideosSearched = new VideosCollection();
// newVideosSearched.on('add', function (modelThatsAdded) { console.log(modelThatsAdded.toJSON()); });
// newVideosSearched.fetch();
// console.log()

// parse: function () {
//   console.log('in parse function!');
//   return response.map(function (response) {
//     return {
//       title: response.items[0].snippet.title,
//       description: response.items[0].snippet.description,
//       id: response.items[0].id.videoId,
//       thumbnail: response.items[0].snippet.thumbnails.default.url,
//       youtubeEmbedUrl:
//         'https://www.youtube.com/embed/' + response.items[0].id.videoId,
//     };
//   });
// },
