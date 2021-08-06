// Search bar at the top of the page, send the value of the string to the YouTube API to fetch videos.  
//  Have a dedicated main player for the video, and five videos on the side
//  When a user clicks a video in the list on the right, that clicked video becomes the main video
//  When the above video changes, the title and description beneath the main video updates (through handlebars)
//  When the page first loads, their is a default string of videos that loads.  The user can then change videos as desired.  Search bar empty when page loads

<iframe src="https://www.youtube.com/embed/xjhuhNKz70s" />

<iframe src="https://www.youtube.com/embed/${id}" />

// `https://www.youtube.com/watch?v=${id}`

var apiKey = AIzaSyBG5b1D7dEBXFY0PgaKlMSFBcV3rNA7A8w;

GET `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&q=searchTerm`;

// GET `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=zr64hUY6qlg,3byFiCh3z4I`;

fetch('')


var VideoModel = Backbone.Model.extend ({
  defaults: {
    videoID: '',
    description: '',
    thumbnails: '',
    viewed: false
  },
});


var AppModel = Backbone.Model.extend ({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      searchTerm: '',
      currentVideo: null,
      apiKey: 
    }  
  }
})



var apiData = `{
  "kind": "youtube#searchListResponse",
  "etag": "x4tQa2TnIPUkFApS-xzOvrYUau0",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
  "totalResults": 200859,
  "resultsPerPage": 5
  },
  "items": [
  {
  "kind": "youtube#searchResult",
  "etag": "LNBjvQi3Gvk05hktTi3plLtNdPE",
  "id": {
  "kind": "youtube#video",
  "videoId": "zr64hUY6qlg"
  },
  "snippet": {
  "publishedAt": "2019-10-31T23:01:02Z",
  "channelId": "UCpFFItkfZz1qz5PpHpqzYBw",
  "title": "The Search Term that Made a YouTuber Vanish (ft. Atrocity Guide)",
  "description": "In late 2015, a 4Channer shared their bizarre story about an enigmatic search term known as \"Erratas\". While it might seem innocent, little did 4Chan know that ...",
  "thumbnails": {
  "default": {
  "url": "https://i.ytimg.com/vi/zr64hUY6qlg/default.jpg",
  "width": 120,
  "height": 90
  },
  "medium": {
  "url": "https://i.ytimg.com/vi/zr64hUY6qlg/mqdefault.jpg",
  "width": 320,
  "height": 180
  },
  "high": {
  "url": "https://i.ytimg.com/vi/zr64hUY6qlg/hqdefault.jpg",
  "width": 480,
  "height": 360
  }
  },
  "channelTitle": "Nexpo",
  "liveBroadcastContent": "none",
  "publishTime": "2019-10-31T23:01:02Z"
  }
  },
  {
  "kind": "youtube#searchResult",
  "etag": "B5wSakDx-cIBndwtb-J_-zBl0CA",
  "id": {
  "kind": "youtube#video",
  "videoId": "3byFiCh3z4I"
  },
  "snippet": {
  "publishedAt": "2019-10-21T16:24:19Z",
  "channelId": "UCTjncaS1oVBYbk2z__jF6hA",
  "title": "How to Optimize Amazon PPC Advertising Campaigns 2020, Read Search Term Reports, PPC Tutorial",
  "description": "In this video, I show you how I analyze Search Term Reports from my Amazon PPC reports. This is a Step by Step Tutorial on how and what the information in ...",
  "thumbnails": {
  "default": {
  "url": "https://i.ytimg.com/vi/3byFiCh3z4I/default.jpg",
  "width": 120,
  "height": 90
  },
  "medium": {
  "url": "https://i.ytimg.com/vi/3byFiCh3z4I/mqdefault.jpg",
  "width": 320,
  "height": 180
  },
  "high": {
  "url": "https://i.ytimg.com/vi/3byFiCh3z4I/hqdefault.jpg",
  "width": 480,
  "height": 360
  }
  },
  "channelTitle": "Sharon Even",
  "liveBroadcastContent": "none",
  "publishTime": "2019-10-21T16:24:19Z"
  }
  },
  {
  "kind": "youtube#searchResult",
  "etag": "FGQC-Wx305uMB21Kp6ShogoI-K0",
  "id": {
  "kind": "youtube#video",
  "videoId": "yvxWzFCRJRY"
  },
  "snippet": {
  "publishedAt": "2019-05-10T21:10:57Z",
  "channelId": "UCV1Od62QQLo9nmNMysS6wiA",
  "title": "Advanced Amazon PPC Search Term Report Time Saver",
  "description": "Advanced PPC Course https://amznomadz.com/order-form/ - Almost 3 Hours of Real PPC Video Data and Analysis - How to Perform Bulk Uploads Like a Pro - 5 ...",
  "thumbnails": {
  "default": {
  "url": "https://i.ytimg.com/vi/yvxWzFCRJRY/default.jpg",
  "width": 120,
  "height": 90
  },
  "medium": {
  "url": "https://i.ytimg.com/vi/yvxWzFCRJRY/mqdefault.jpg",
  "width": 320,
  "height": 180
  },
  "high": {
  "url": "https://i.ytimg.com/vi/yvxWzFCRJRY/hqdefault.jpg",
  "width": 480,
  "height": 360
  }
  },
  "channelTitle": "Lucas Kwiatkowski",
  "liveBroadcastContent": "none",
  "publishTime": "2019-05-10T21:10:57Z"
  }
  },
  {
  "kind": "youtube#searchResult",
  "etag": "wlrP9Lr_JbvOl9upz6OhkAD3rQk",
  "id": {
  "kind": "youtube#video",
  "videoId": "2aSdO37t8Ls"
  },
  "snippet": {
  "publishedAt": "2021-03-17T18:00:00Z",
  "channelId": "UCAaCnaGdVpNzylKpou646vw",
  "title": "I BECAME A SEARCH TERM",
  "description": "QTCinderella Reddit React look at fan art, memes, becoming a search term, trying to be as cool a Ludwig, and Daily Dose! Reddit ...",
  "thumbnails": {
  "default": {
  "url": "https://i.ytimg.com/vi/2aSdO37t8Ls/default.jpg",
  "width": 120,
  "height": 90
  },
  "medium": {
  "url": "https://i.ytimg.com/vi/2aSdO37t8Ls/mqdefault.jpg",
  "width": 320,
  "height": 180
  },
  "high": {
  "url": "https://i.ytimg.com/vi/2aSdO37t8Ls/hqdefault.jpg",
  "width": 480,
  "height": 360
  }
  },
  "channelTitle": "QTCinderella",
  "liveBroadcastContent": "none",
  "publishTime": "2021-03-17T18:00:00Z"
  }
  },
  {
  "kind": "youtube#searchResult",
  "etag": "gE4DJ9KzHw2WFdhAzoWGJ6NIqDI",
  "id": {
  "kind": "youtube#video",
  "videoId": "vyUawI_2trA"
  },
  "snippet": {
  "publishedAt": "2021-01-28T01:02:28Z",
  "channelId": "UC-dMMLpioY_6s5HOHDUBuDg",
  "title": "Amazon Advertising | Search Term Impression Share Report",
  "description": "Discusses what the \"Search Term Impression Share Report\" is and a great tactic to identify opportunity search terms that could be DOMINATING the ad coverage ...",
  "thumbnails": {
  "default": {
  "url": "https://i.ytimg.com/vi/vyUawI_2trA/default.jpg",
  "width": 120,
  "height": 90
  },
  "medium": {
  "url": "https://i.ytimg.com/vi/vyUawI_2trA/mqdefault.jpg",
  "width": 320,
  "height": 180
  },
  "high": {
  "url": "https://i.ytimg.com/vi/vyUawI_2trA/hqdefault.jpg",
  "width": 480,
  "height": 360
  }
  },
  "channelTitle": "Brian Johnson",
  "liveBroadcastContent": "none",
  "publishTime": "2021-01-28T01:02:28Z"
  }
  }
  ]
  }`