var appModel = new AppModel();

//Default videos are added to the collection to show on page load 
//if API not functional. Comment out lines 6-16 and uncomment line 22
//to try the API search.
appModel.get('videos').addVideo('Facts: The Leafy Seadragon', "Quick facts about this well camouflaged fish! The leafy seadragon (Phycodurus eques, Glauert's seadragon). Leafy seadragon facts! Subscribe: ...", 'NsGK7cUdelM', 'https://i.ytimg.com/vi/NsGK7cUdelM/default.jpg', 'https://www.youtube.com/embed/NsGK7cUdelM');

appModel.get('videos').addVideo('The Leafy Sea Dragon Is A Mythical Looking Creature! | Weird Creatures With Nick Baker', 'Nick is in South Australia searching for the leafy sea dragon, a mythical-looking relative of the seahorse. Subscribe to Discovery UK for more great clips: ...', 'dYXBip9bZME', 'https://i.ytimg.com/vi/dYXBip9bZME/default.jpg', 'https://www.youtube.com/embed/dYXBip9bZME');

appModel.get('videos').addVideo('Leafy Seadragons of South Australia | JONATHAN BIRD\'S BLUE WORLD', 'In an epic expedition down under, the Bird family goes on a search for the most exquisite seahorse in the world--the Leafy Seadragon! Just south of Adelaide in ...', '--QOJZmNG_E', 'https://i.ytimg.com/vi/--QOJZmNG_E/default.jpg', 'https://www.youtube.com/embed/--QOJZmNG_E');

appModel.get('videos').addVideo('Octonauts The Leafy Sea Dragons', 'Octonauts and the Leafy Sea Dragon - Storyline: Some leafy sea dragons accidentally get into the Octopod and the Octonauts will have to . The Octonauts and ...', 'LLE6Jx-Vd5k', 'https://i.ytimg.com/vi/LLE6Jx-Vd5k/default.jpg', 'https://www.youtube.com/embed/LLE6Jx-Vd5k');
  
appModel.get('videos').addVideo('Octonauts: Creature Reports - Leafy Sea Dragon', "Want to join our next mission? Click here to Subscribe: http://goo.gl/DzwvWv The Octonauts are an adventure team who explore the world's oceans, rescue the ...", 'a04ij4gxi0Q', 'https://i.ytimg.com/vi/a04ij4gxi0Q/default.jpg', 'https://www.youtube.com/embed/a04ij4gxi0Q');

appModel.showVideo('https://i.ytimg.com/vi/--QOJZmNG_E/default.jpg');

var appView = new AppView({ model: appModel });

//If API is working and hardcoded videos above are commented out, this
//should fetch videos on page load
// appModel.get('videos').fetch({ reset: true });
