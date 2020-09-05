var appModel = new AppModel();

// console.log('started and created appModel');
// console.log(appModel.get('videosCollection'));
// console.log('that was videos collection');

//Add some default videos to the collection to show on page load
appModel.get('videosCollection').add([
  {
    title: 'Facts: The Leafy Seadragon', //results.items[0].snippet.title
    description:
      "Quick facts about this well camouflaged fish! The leafy seadragon (Phycodurus eques, Glauert's seadragon). Leafy seadragon facts! Subscribe: ...", //results.items[0].snippet.description
    id: 'NsGK7cUdelM', //resulta.items[0].id.videoId
    thumbnail: 'https://i.ytimg.com/vi/NsGK7cUdelM/default.jpg', //results.items[0].snippet.thumbnails.default.url
    youtubeEmbedUrl: 'https://www.youtube.com/embed/NsGK7cUdelM', //"https://www.youtube.com/embed/"+resulta.items[0].id.videoId
  },
  {
    title:
      'The Leafy Sea Dragon Is A Mythical Looking Creature! | Weird Creatures With Nick Baker',
    description:
      'Nick is in South Australia searching for the leafy sea dragon, a mythical-looking relative of the seahorse. Subscribe to Discovery UK for more great clips: ...',
    id: 'dYXBip9bZME',
    thumbnail: 'https://i.ytimg.com/vi/dYXBip9bZME/default.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/dYXBip9bZME',
  },
  {
    title:
      'Leafy Seadragons of South Australia | JONATHAN BIRD&#39;S BLUE WORLD',
    description:
      'In an epic expedition down under, the Bird family goes on a search for the most exquisite seahorse in the world--the Leafy Seadragon! Just south of Adelaide in ...',
    id: '--QOJZmNG_E',
    thumbnail: 'https://i.ytimg.com/vi/--QOJZmNG_E/default.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/--QOJZmNG_E',
  },
  {
    title: 'Octonauts The Leafy Sea Dragons',
    description:
      'Octonauts and the Leafy Sea Dragon - Storyline: Some leafy sea dragons accidentally get into the Octopod and the Octonauts will have to . The Octonauts and ...',
    id: 'LLE6Jx-Vd5k',
    thumbnail: 'https://i.ytimg.com/vi/LLE6Jx-Vd5k/default.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/LLE6Jx-Vd5k',
  },
  {
    title: 'Octonauts: Creature Reports - Leafy Sea Dragon',
    description:
      "Want to join our next mission? Click here to Subscribe: http://goo.gl/DzwvWv The Octonauts are an adventure team who explore the world's oceans, rescue the ...",
    id: 'a04ij4gxi0Q',
    thumbnail: 'https://i.ytimg.com/vi/a04ij4gxi0Q/default.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/a04ij4gxi0Q',
  },
]);

console.log(appModel.get('current_video'));
console.log('trying to get attributes');

var appView = new AppView({ model: appModel });
var videoMainView = new VideoMainView({ model: videoModel });
var videoThumbnailView = new VideoThumbnailView({ model: videoModel });


// var newVideosSearched = new VideosCollection();
// newVideosSearched.on('add', function (modelThatsAdded) { console.log(modelThatsAdded.toJSON()); });
// newVideosSearched.fetch();

//https://www.youtube.com/watch?v=NsGK7cUdelM
