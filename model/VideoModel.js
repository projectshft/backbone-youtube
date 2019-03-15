var VideoModel = Backbone.Model.extend({
  defaults: function() {
  {
    return {
    title: "",
    description: "",
    url: ""
    }
  }
}
});

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/o839n98UQzNdMszNUyMQ7sO_BSw\"",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "US",
//   "pageInfo": {
//    "totalResults": 1000000,
//    "resultsPerPage": 5
//   },
//   "items": [
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/x5VBbjDMp7WiY_H_Ifs26BruaX8\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "jbnddQ9l0IA"
//     },
//     "snippet": {
//      "publishedAt": "2015-02-16T02:59:55.000Z",
//      "channelId": "UCEgGmoOG70XNavCGGG6Ti0Q",
//      "title": "Undefined - Episode 1",
//      "description": "",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/jbnddQ9l0IA/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/jbnddQ9l0IA/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/jbnddQ9l0IA/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "WallStreet Entertainment",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Kitp-LQqgDDvdFOjkLmyowcZavo\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "HHUcIwfOUVE"
//     },
//     "snippet": {
//      "publishedAt": "2015-04-13T04:00:42.000Z",
//      "channelId": "UCEgGmoOG70XNavCGGG6Ti0Q",
//      "title": "Undefined, Episode 3 - &quot;Have You Seen this Bear?&quot;",
//      "description": "Undefined - Episode 3 ---- Creative Commons Credits \"Movement Proposition\" Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/HHUcIwfOUVE/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/HHUcIwfOUVE/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/HHUcIwfOUVE/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "WallStreet Entertainment",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/BXzEE9nFmvta0wvTwaCAJ-82f0A\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "Q6FoYUFMd4w"
//     },
//     "snippet": {
//      "publishedAt": "2013-10-11T19:54:17.000Z",
//      "channelId": "UC_VPwodspkZdEXr9fZJ8fXg",
//      "title": "【初音ミク】Undefined 【オリジナルMV】",
//      "description": "【初音ミク】Undefined 【オリジナルMV】DAM/JOYSOUND配信中 niconico→http://www.nicovideo.jp/watch/sm19702804 Lyrics/Music/Arrangement : てぃあら ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/Q6FoYUFMd4w/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/Q6FoYUFMd4w/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/Q6FoYUFMd4w/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "StudioTiara0207",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/k1wzEKnGMzrIuxSQPTf0C98oS5g\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "8FOrfPpnhFI"
//     },
//     "snippet": {
//      "publishedAt": "2017-11-06T19:20:13.000Z",
//      "channelId": "UC2sZyDm1FqBWrWiCiAuI2Ug",
//      "title": "Undefined",
//      "description": "look an B E P i S Technically, the square root of -1 is i, an imaginary number. I was debating changing it, but that's how it is in the original. Original: ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/8FOrfPpnhFI/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/8FOrfPpnhFI/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/8FOrfPpnhFI/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Timotainment",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/D5lTZOnYf1_reqqv9Nxqsj9fpf0\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "O0Xwl15bK10"
//     },
//     "snippet": {
//      "publishedAt": "2018-10-21T19:44:27.000Z",
//      "channelId": "UCi9Q7BqojVxhBwKieP1pZww",
//      "title": "Strongman - Undefined",
//      "description": "Rapper Strongman Perfroms Undefined Produced By Unda Beat. Video Directed By Mr Twist. Get Audio Here: https://bit.ly/2yu7B1X PLEASE NOTE: ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/O0Xwl15bK10/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/O0Xwl15bK10/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/O0Xwl15bK10/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Strongman Burner",
//      "liveBroadcastContent": "none"
//     }
//    }
//   ]
//  }
 