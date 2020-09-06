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

  findThumbnails: function (
    currentVideoObject,
    allVideosArray,
    thumbnailsArray
  ) {
    //grab the ID of the current video to compare to other videos' IDs
    var currentVideoID = currentVideoObject[0].id;
    //push all videos that do not have same ID as current video to thumbnails array
    for (var i = 0; i < allVideosArray.length; i++) {
      if (allVideosArray[i].attributes.id !== currentVideoID) {
        thumbnailsArray.push(allVideosArray[i].attributes);
      }
    }
    return thumbnailsArray;
  },

  parse: function () {

    console.log('in second parse funtion');
    console.log(this);
    console.log('trying to get this.get(videosCollection)')

    var response = [
      {
        kind: 'youtube#searchListResponse',
        etag: 'mJ8708yCF6BUEzX5lSATVlxdK-I',
        nextPageToken: 'CAUQAA',
        regionCode: 'US',
        pageInfo: {
          totalResults: 49936,
          resultsPerPage: 5,
        },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: '6lxaZIN0_rPyhF4lqMHJTLvAgVI',
            id: {
              kind: 'youtube#video',
              videoId: 'NsGK7cUdelM',
            },
            snippet: {
              publishedAt: '2019-01-15T19:00:05Z',
              channelId: 'UCvVWg9g4zQeoYdBsLbGypBQ',
              title: 'Facts: The Leafy Seadragon',
              description:
                "Quick facts about this well camouflaged fish! The leafy seadragon (Phycodurus eques, Glauert's seadragon). Leafy seadragon facts! Subscribe: ...",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/NsGK7cUdelM/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/NsGK7cUdelM/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/NsGK7cUdelM/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Deep Marine Scenes',
              liveBroadcastContent: 'none',
              publishTime: '2019-01-15T19:00:05Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'hPBM9Tgnj8lJp0_YkscoQUI7zE8',
            id: {
              kind: 'youtube#video',
              videoId: 'dYXBip9bZME',
            },
            snippet: {
              publishedAt: '2020-03-14T12:00:09Z',
              channelId: 'UC9cGX5x0_EXkdfmWlvPbu3g',
              title:
                'The Leafy Sea Dragon Is A Mythical Looking Creature! | Weird Creatures With Nick Baker',
              description:
                'Nick is in South Australia searching for the leafy sea dragon, a mythical-looking relative of the seahorse. Subscribe to Discovery UK for more great clips: ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/dYXBip9bZME/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/dYXBip9bZME/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/dYXBip9bZME/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Discovery UK',
              liveBroadcastContent: 'none',
              publishTime: '2020-03-14T12:00:09Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'WaRJ2JtCPDV7peULb7XBHjw9LPU',
            id: {
              kind: 'youtube#video',
              videoId: '--QOJZmNG_E',
            },
            snippet: {
              publishedAt: '2018-11-04T14:58:34Z',
              channelId: 'UCFH-Qa1s6rQRTrQjFg8N84Q',
              title:
                'Leafy Seadragons of South Australia | JONATHAN BIRD&#39;S BLUE WORLD',
              description:
                'In an epic expedition down under, the Bird family goes on a search for the most exquisite seahorse in the world--the Leafy Seadragon! Just south of Adelaide in ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/--QOJZmNG_E/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/--QOJZmNG_E/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/--QOJZmNG_E/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'BlueWorldTV',
              liveBroadcastContent: 'none',
              publishTime: '2018-11-04T14:58:34Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '53bbUdYwuyEfDcyT5Ji-uKss-LA',
            id: {
              kind: 'youtube#video',
              videoId: 'LLE6Jx-Vd5k',
            },
            snippet: {
              publishedAt: '2016-08-14T04:44:45Z',
              channelId: 'UChaOxWd1jeaQTkjdq0rmFgQ',
              title: 'Octonauts The Leafy Sea Dragons',
              description:
                'Octonauts and the Leafy Sea Dragon - Storyline: Some leafy sea dragons accidentally get into the Octopod and the Octonauts will have to . The Octonauts and ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/LLE6Jx-Vd5k/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/LLE6Jx-Vd5k/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/LLE6Jx-Vd5k/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Jeff Moss',
              liveBroadcastContent: 'none',
              publishTime: '2016-08-14T04:44:45Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'DQPPJxqwyFa5LPtUOKuMeoYyOLY',
            id: {
              kind: 'youtube#video',
              videoId: 'a04ij4gxi0Q',
            },
            snippet: {
              publishedAt: '2016-07-06T06:00:02Z',
              channelId: 'UCXLLQkbYE-G9jYrra7R4Qsw',
              title: 'Octonauts: Creature Reports - Leafy Sea Dragon',
              description:
                "Want to join our next mission? Click here to Subscribe: http://goo.gl/DzwvWv The Octonauts are an adventure team who explore the world's oceans, rescue the ...",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/a04ij4gxi0Q/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/a04ij4gxi0Q/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/a04ij4gxi0Q/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Octonauts',
              liveBroadcastContent: 'none',
              publishTime: '2016-07-06T06:00:02Z',
            },
          },
        ],
      },
    ];

    return response.map(function (b) {
      var newVideos = appModel.get('videosCollection') || new VideosCollection();
      newVideos.set(b.newVideos);
      b.newVideos = newVideos;
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

//   });

// });

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
