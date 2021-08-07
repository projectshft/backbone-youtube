// Search bar at the top of the page, send the value of the string to the YouTube API to fetch videos.  
//  Have a dedicated main player for the video, and five videos on the side
//  When a user clicks a video in the list on the right, that clicked video becomes the main video
//  When the above video changes, the title and description beneath the main video updates (through handlebars)
//  When the page first loads, their is a default string of videos that loads.  The user can then change videos as desired.  Search bar empty when page loads

// Steps to take
// Create handlebars templates for the main video  --  will take video URL, video URL, and video description
//  Create handlebars template for the side video  --  will take video URL, summary
//  Create handlebars for five side video lists  --  will take an array of 5 side videos.  Each object will have video URL and summary
//  Create an API call function that takes as parameter the search value (key) and returns an object that contains the main video object and an array of five side video objects
//  For the default page, call the API function given a default search key
//  Put API data into Backbone model
//  Use Backbone model in the handlebar template
//  Upon user search, get the search key from the input. Call the API function, and do handlebar and backbone as above


/* <iframe src="https://www.youtube.com/embed/xjhuhNKz70s" />

<iframe src="https://www.youtube.com/embed/${id}" /> */

// `https://www.youtube.com/watch?v=${id}`

// var apiKey = AIzaSyBG5b1D7dEBXFY0PgaKlMSFBcV3rNA7A8w;

// GET `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&q=searchTerm`;

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBG5b1D7dEBXFY0PgaKlMSFBcV3rNA7A8w&q=searchTerm

// GET `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=zr64hUY6qlg,3byFiCh3z4I`;

// fetch('')

var renderMainVideo = function (mainVideoInfo) {
  $('.mainVideo').empty();
  console.log(mainVideoInfo);
  var source = $('#mainvideo-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template({mainVideoInfo});
  $('.mainVideo').append(newHTML);
};


// var VideoModel = Backbone.Model.extend ({
//   defaults: {
//     videoID: '',
//     description: '',
//     thumbnails: '',
//     viewed: false
//   },
// });


// var AppModel = Backbone.Model.extend ({
//   defaults: function () {
//     return {
//       videos: new VideosCollection(),
//       searchTerm: '',
//       currentVideo: null,
//       apiKey: 
//     }  
//   }
// })



var apiData = {
  "kind": "youtube#searchListResponse",
  "etag": "kFKJiEMd4H4PGTAgfZyDkMeOMK0",
  "nextPageToken": "CAYQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 6
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "dx5MxJ267WsYyYihfeasbDJU98A",
      "id": {
        "kind": "youtube#video",
        "videoId": "srlzTHIr3W0"
      },
      "snippet": {
        "publishedAt": "2021-08-06T17:00:27Z",
        "channelId": "UCHEf6T_gVq4tlW5i91ESiWg",
        "title": "Try Not To Eat Challenge - Disney (Raya, Luca, Moana, Zootopia) | People Vs. Food",
        "description": "We found Disney's tastiest foods to tempt our reactors! Can they resist these delicious foods?! Watch every episode of Try Not To Eat here: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/srlzTHIr3W0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/srlzTHIr3W0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/srlzTHIr3W0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "People Vs Food",
        "liveBroadcastContent": "none",
        "publishTime": "2021-08-06T17:00:27Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "HbF_0OK_9dBWW1rmqkNvD-tO1GM",
      "id": {
        "kind": "youtube#video",
        "videoId": "g8NVwN0_mks"
      },
      "snippet": {
        "publishedAt": "2019-01-10T12:32:26Z",
        "channelId": "UCulsxDuZ0gU8lzhpPAjUwUg",
        "title": "Disney RELAXING PIANO Collection -Sleep Music, Study Music, Calm Music (Piano Covered by kno)",
        "description": "Disney #Disneypiano #knopianomusic 00:00 Someday My Prince Will Come (From \"Snow White and the Seven Dwarfs\") 02:18 A Dream is a Wish Your Heart ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/g8NVwN0_mks/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/g8NVwN0_mks/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/g8NVwN0_mks/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "kno Piano Music",
        "liveBroadcastContent": "none",
        "publishTime": "2019-01-10T12:32:26Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Flb8Z4i-_dCoE40cHxADfPSldYQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "VCZ-7GQP1Ko"
      },
      "snippet": {
        "publishedAt": "2019-12-29T17:45:01Z",
        "channelId": "UCNcdbMyA59zE-Vk668bKWOg",
        "title": "Nutty Tales 30 Minute Compilation! | Chip &#39;N Dale&#39;s Nutty Tales | Disney Junior",
        "description": "Chip and Dale enter a kite competition, plan a firework show, run a lemonade stand, and more! Watch Chip N Dale Nutty Tales on Disney Junior and in the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VCZ-7GQP1Ko/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VCZ-7GQP1Ko/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VCZ-7GQP1Ko/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Disney Junior",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-29T17:45:01Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "fECD5ZMlTPcUkTQ9yI4lOMPmi3s",
      "id": {
        "kind": "youtube#video",
        "videoId": "U5Vm_AiINuw"
      },
      "snippet": {
        "publishedAt": "2021-07-30T09:12:11Z",
        "channelId": "UCFLHD_brc3GX49iZ9UOzrxQ",
        "title": "[LIVE] Paper Dolls Dress Up 🔴 Disney&#39;s Marie Cat Handmade Dresses Quiet Book 🔴 Barbie Story Crafts",
        "description": "woadollcrafts #paperdolls #paper #doll #woavideos #woadiy #woacrafts #paperdoll ----------- See more: - ALL VIDEOS WOA DOLLCRAFTS: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/U5Vm_AiINuw/default_live.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/U5Vm_AiINuw/mqdefault_live.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/U5Vm_AiINuw/hqdefault_live.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "WOA Doll Crafts",
        "liveBroadcastContent": "live",
        "publishTime": "2021-07-30T09:12:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "R3iStJM4-FRFd8QCoGOn_Xq-bD0",
      "id": {
        "kind": "youtube#video",
        "videoId": "togmdDHG3Pw"
      },
      "snippet": {
        "publishedAt": "2021-07-08T12:43:38Z",
        "channelId": "UC_976xMxPgzIa290Hqtk-9g",
        "title": "Disney&#39;s Encanto | Teaser Trailer",
        "description": "You're invited into the exceptional, fantastical and magical Casa Madrigal. ✨ Watch the new trailer for Disney's Encanto now! See the movie this November.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/togmdDHG3Pw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/togmdDHG3Pw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/togmdDHG3Pw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Walt Disney Animation Studios",
        "liveBroadcastContent": "none",
        "publishTime": "2021-07-08T12:43:38Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SHoDBWIZkzDjDQccg36RXcPFsbE",
      "id": {
        "kind": "youtube#video",
        "videoId": "uh4dTLJ9q9o"
      },
      "snippet": {
        "publishedAt": "2015-09-16T07:00:30Z",
        "channelId": "UCgwv23FVv3lqh567yagXfNg",
        "title": "Disney Music - Lava (Official Lyric Video from &quot;Lava&quot;)",
        "description": "Download the song “Lava” here: http://smarturl.it/dpls1 Google Play: http://smarturl.it/dplgps1 Amazon: http://smarturl.it/dplams1 Streaming: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uh4dTLJ9q9o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uh4dTLJ9q9o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uh4dTLJ9q9o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "DisneyMusicVEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2015-09-16T07:00:30Z"
      }
    }
  ]
}

$( document ).ready(function() {
  renderMainVideo(apiData.items[0]);
  // render sidevideos(apiData.items)
});
















// `{
//   "kind": "youtube#searchListResponse",
//   "etag": "x4tQa2TnIPUkFApS-xzOvrYUau0",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "US",
//   "pageInfo": {
//   "totalResults": 200859,
//   "resultsPerPage": 5
//   },
//   "items": [
//   {
//   "kind": "youtube#searchResult",
//   "etag": "LNBjvQi3Gvk05hktTi3plLtNdPE",
//   "id": {
//   "kind": "youtube#video",
//   "videoId": "zr64hUY6qlg"
//   },
//   "snippet": {
//   "publishedAt": "2019-10-31T23:01:02Z",
//   "channelId": "UCpFFItkfZz1qz5PpHpqzYBw",
//   "title": "The Search Term that Made a YouTuber Vanish (ft. Atrocity Guide)",
//   "description": "In late 2015, a 4Channer shared their bizarre story about an enigmatic search term known as \"Erratas\". While it might seem innocent, little did 4Chan know that ...",
//   "thumbnails": {
//   "default": {
//   "url": "https://i.ytimg.com/vi/zr64hUY6qlg/default.jpg",
//   "width": 120,
//   "height": 90
//   },
//   "medium": {
//   "url": "https://i.ytimg.com/vi/zr64hUY6qlg/mqdefault.jpg",
//   "width": 320,
//   "height": 180
//   },
//   "high": {
//   "url": "https://i.ytimg.com/vi/zr64hUY6qlg/hqdefault.jpg",
//   "width": 480,
//   "height": 360
//   }
//   },
//   "channelTitle": "Nexpo",
//   "liveBroadcastContent": "none",
//   "publishTime": "2019-10-31T23:01:02Z"
//   }
//   },
//   {
//   "kind": "youtube#searchResult",
//   "etag": "B5wSakDx-cIBndwtb-J_-zBl0CA",
//   "id": {
//   "kind": "youtube#video",
//   "videoId": "3byFiCh3z4I"
//   },
//   "snippet": {
//   "publishedAt": "2019-10-21T16:24:19Z",
//   "channelId": "UCTjncaS1oVBYbk2z__jF6hA",
//   "title": "How to Optimize Amazon PPC Advertising Campaigns 2020, Read Search Term Reports, PPC Tutorial",
//   "description": "In this video, I show you how I analyze Search Term Reports from my Amazon PPC reports. This is a Step by Step Tutorial on how and what the information in ...",
//   "thumbnails": {
//   "default": {
//   "url": "https://i.ytimg.com/vi/3byFiCh3z4I/default.jpg",
//   "width": 120,
//   "height": 90
//   },
//   "medium": {
//   "url": "https://i.ytimg.com/vi/3byFiCh3z4I/mqdefault.jpg",
//   "width": 320,
//   "height": 180
//   },
//   "high": {
//   "url": "https://i.ytimg.com/vi/3byFiCh3z4I/hqdefault.jpg",
//   "width": 480,
//   "height": 360
//   }
//   },
//   "channelTitle": "Sharon Even",
//   "liveBroadcastContent": "none",
//   "publishTime": "2019-10-21T16:24:19Z"
//   }
//   },
//   {
//   "kind": "youtube#searchResult",
//   "etag": "FGQC-Wx305uMB21Kp6ShogoI-K0",
//   "id": {
//   "kind": "youtube#video",
//   "videoId": "yvxWzFCRJRY"
//   },
//   "snippet": {
//   "publishedAt": "2019-05-10T21:10:57Z",
//   "channelId": "UCV1Od62QQLo9nmNMysS6wiA",
//   "title": "Advanced Amazon PPC Search Term Report Time Saver",
//   "description": "Advanced PPC Course https://amznomadz.com/order-form/ - Almost 3 Hours of Real PPC Video Data and Analysis - How to Perform Bulk Uploads Like a Pro - 5 ...",
//   "thumbnails": {
//   "default": {
//   "url": "https://i.ytimg.com/vi/yvxWzFCRJRY/default.jpg",
//   "width": 120,
//   "height": 90
//   },
//   "medium": {
//   "url": "https://i.ytimg.com/vi/yvxWzFCRJRY/mqdefault.jpg",
//   "width": 320,
//   "height": 180
//   },
//   "high": {
//   "url": "https://i.ytimg.com/vi/yvxWzFCRJRY/hqdefault.jpg",
//   "width": 480,
//   "height": 360
//   }
//   },
//   "channelTitle": "Lucas Kwiatkowski",
//   "liveBroadcastContent": "none",
//   "publishTime": "2019-05-10T21:10:57Z"
//   }
//   },
//   {
//   "kind": "youtube#searchResult",
//   "etag": "wlrP9Lr_JbvOl9upz6OhkAD3rQk",
//   "id": {
//   "kind": "youtube#video",
//   "videoId": "2aSdO37t8Ls"
//   },
//   "snippet": {
//   "publishedAt": "2021-03-17T18:00:00Z",
//   "channelId": "UCAaCnaGdVpNzylKpou646vw",
//   "title": "I BECAME A SEARCH TERM",
//   "description": "QTCinderella Reddit React look at fan art, memes, becoming a search term, trying to be as cool a Ludwig, and Daily Dose! Reddit ...",
//   "thumbnails": {
//   "default": {
//   "url": "https://i.ytimg.com/vi/2aSdO37t8Ls/default.jpg",
//   "width": 120,
//   "height": 90
//   },
//   "medium": {
//   "url": "https://i.ytimg.com/vi/2aSdO37t8Ls/mqdefault.jpg",
//   "width": 320,
//   "height": 180
//   },
//   "high": {
//   "url": "https://i.ytimg.com/vi/2aSdO37t8Ls/hqdefault.jpg",
//   "width": 480,
//   "height": 360
//   }
//   },
//   "channelTitle": "QTCinderella",
//   "liveBroadcastContent": "none",
//   "publishTime": "2021-03-17T18:00:00Z"
//   }
//   },
//   {
//   "kind": "youtube#searchResult",
//   "etag": "gE4DJ9KzHw2WFdhAzoWGJ6NIqDI",
//   "id": {
//   "kind": "youtube#video",
//   "videoId": "vyUawI_2trA"
//   },
//   "snippet": {
//   "publishedAt": "2021-01-28T01:02:28Z",
//   "channelId": "UC-dMMLpioY_6s5HOHDUBuDg",
//   "title": "Amazon Advertising | Search Term Impression Share Report",
//   "description": "Discusses what the \"Search Term Impression Share Report\" is and a great tactic to identify opportunity search terms that could be DOMINATING the ad coverage ...",
//   "thumbnails": {
//   "default": {
//   "url": "https://i.ytimg.com/vi/vyUawI_2trA/default.jpg",
//   "width": 120,
//   "height": 90
//   },
//   "medium": {
//   "url": "https://i.ytimg.com/vi/vyUawI_2trA/mqdefault.jpg",
//   "width": 320,
//   "height": 180
//   },
//   "high": {
//   "url": "https://i.ytimg.com/vi/vyUawI_2trA/hqdefault.jpg",
//   "width": 480,
//   "height": 360
//   }
//   },
//   "channelTitle": "Brian Johnson",
//   "liveBroadcastContent": "none",
//   "publishTime": "2021-01-28T01:02:28Z"
//   }
//   }
//   ]
//   }`