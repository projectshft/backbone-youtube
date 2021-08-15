$('.search-button').on('click', function () {
  var video = $('#video-search').val();
  
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${video}&type=video&videoEmbeddable=true&key=AIzaSyBG5b1D7dEBXFY0PgaKlMSFBcV3rNA7A8w`).then(function(response) {
    return response.json();
  })
  .then(function(data) {
  renderMainVideo(data.items[0]);
  renderSideVideos(data.items);
  });
});



var renderMainVideo = function (mainVideoInfo) {
  $('.mainVideo').empty();
  var source = $('#mainvideo-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template({mainVideoInfo});
  $('.mainVideo').append(newHTML);
};

var renderSideVideos = function (fiveVideoInfo) {
  $('.sideVideo').empty();
  var source = $('#fivevideo-template').html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < fiveVideoInfo.length; i++) {
    var newHTML = template(
      {
        videoLoop: fiveVideoInfo[i]
      }
      );
    $('.sideVideo').append(newHTML);
  }
};


var apiData = {
  "kind": "youtube#searchListResponse",
  "etag": "f_RJ0O4oCnyC4jBijPkeDQWHJyI",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "0Tob_RJFQzCx1XK9ZTCu6s6FnQQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "LJJ09p5S5-Y"
      },
      "snippet": {
        "publishedAt": "2021-08-08T21:51:20Z",
        "channelId": "UCmOy2-vrvwDh6O1bTUB5m_g",
        "title": "Yesterworld: The Rise &amp; Fall of Disney’s Pleasure Island and the Troubled History of Downtown Disney",
        "description": "Explore the History of Pleasure Island, the Disney's first (and only) Adult oriented Entertainment District, as well as the troubled History & Origins of Downtown ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LJJ09p5S5-Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LJJ09p5S5-Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LJJ09p5S5-Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Yesterworld Entertainment",
        "liveBroadcastContent": "none",
        "publishTime": "2021-08-08T21:51:20Z"
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
      "etag": "qD04O7k7hFkSI9RzfLr1Aco7h2k",
      "id": {
        "kind": "youtube#video",
        "videoId": "qHo6-pjpCZY"
      },
      "snippet": {
        "publishedAt": "2021-08-07T01:47:32Z",
        "channelId": "UC3HHLghSCKX6pY3YE5PsyyQ",
        "title": "Live: Epcot Food and Wine &amp; Epcot Forever Fireworks | Disney World",
        "description": "epcotfoodandwine #live #epcotforever Check out the best Disney World You Tube website! livingindiz.com Welcome to Live: Epcot Food and Wine, Epic Live ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qHo6-pjpCZY/default_live.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qHo6-pjpCZY/mqdefault_live.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qHo6-pjpCZY/hqdefault_live.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Living in DIZ",
        "liveBroadcastContent": "live",
        "publishTime": "2021-08-07T01:47:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SfEThKS1S0_hNEjpiWsPca3FVUs",
      "id": {
        "kind": "youtube#video",
        "videoId": "XOnHtStmbCI"
      },
      "snippet": {
        "publishedAt": "2019-08-03T13:45:01Z",
        "channelId": "UCNcdbMyA59zE-Vk668bKWOg",
        "title": "Mickey and Donald Have a Farm 🚜 | Full Episode | Mickey Mouse Clubhouse | Disney Junior",
        "description": "Mickey, Donald, Minnie, Goofy, and Daisy plan to rescue the missing animals from the Clubhouse Farm! Watch Mickey Mouse Clubhouse on Disney Junior and ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XOnHtStmbCI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XOnHtStmbCI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XOnHtStmbCI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Disney Junior",
        "liveBroadcastContent": "none",
        "publishTime": "2019-08-03T13:45:01Z"
      }
    }
  ]
}

$( document ).ready(function() {
  renderMainVideo(apiData.items[0]);
  renderSideVideos(apiData.items);
});


// Search bar at the top of the page, send the value of the string to the YouTube API to fetch videos.  
//  Have a dedicated main player for the video, and five videos on the side
//  When a user clicks a video in the list on the right, that clicked video becomes the main video
//  When the above video changes, the title and description beneath the main video updates (through handlebars)
//  When the page first loads, there is a default string of videos that loads.  The user can then change videos as desired.  Search bar empty when page loads



//  iframe data, apiKey and GET addresses are below.  Referenced elsewhere on eval

/* <iframe src="https://www.youtube.com/embed/xjhuhNKz70s" />

<iframe src="https://www.youtube.com/embed/${id}" /> */

// `https://www.youtube.com/watch?v=${id}`

// var apiKey = AIzaSyBG5b1D7dEBXFY0PgaKlMSFBcV3rNA7A8w;

// GET `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&q=searchTerm`;

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBG5b1D7dEBXFY0PgaKlMSFBcV3rNA7A8w&q=searchTerm

// GET `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=zr64hUY6qlg,3byFiCh3z4I`;

// fetch('')




// Steps to take
// Create handlebars templates for the main video  --  will take video URL, video URL, and video description
//  Create handlebars template for the side video  --  will take video URL, summary
//  Create handlebars for five side video lists  --  will take an array of 5 side videos.  Each object will have video URL and summary
//  Create an API call function that takes as parameter the search value (key) and returns an object that contains the main video object and an array of five side video objects
//  For the default page, call the API function given a default search key
//  Put API data into Backbone model
//  Use Backbone model in the handlebar template
//  Upon user search, get the search key from the input. Call the API function, and do handlebar and backbone as above


//  Below is the setup for Backbone Model and Collection

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


