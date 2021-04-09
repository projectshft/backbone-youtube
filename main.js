var appModel = new AppModel();

appModel.get('videos').add([
  {
    id: 'L5dM6NdZXd4',
    name: 'Josh Bridges 2021 CrossFit Open Prep + Dave Castro Gets Called Out | Paying the Man Ep.083',
    video_url: 'https://i.ytimg.com/vi/L5dM6NdZXd4/mqdefault.jpg',
    description: 'The CrossFit season is just around the corner so I show you how I am preparing for the 2021 CrossFit Open. I also call out Dave Castro, to get him and I in a ring, ...'
  },
  {
    id: 'vcDsh9Sjm18',
    name: 'Event 1 &amp; 2 - 2007 Reload and Corn Sack Sprint - 2020 CrossFit Games',
    video_url: 'https://i.ytimg.com/vi/vcDsh9Sjm18/mqdefault.jpg',
    description: 'The hardest test in CrossFit Games history begins here. Five men. Five women. Three days of grueling competition. Grab snacks. #CrossFitGames The CrossFit ...'
  },

  {
    id: 'tzD9BkXGJ1M',
    name: 'What is CrossFit?',
    video_url: 'https://i.ytimg.com/vi/tzD9BkXGJ1M/mqdefault.jpg',
    description: 'What is CrossFit? CrossFit is an effective way to get fit. Anyone can do it. It is a fitness program that combines a wide variety of functional movements into a timed ...'
  },
  {
    id: 'JZpVUNiSg5s',
    name: 'I TRIED CROSSFIT FOR THE FIRST TIME',
    video_url: 'https://i.ytimg.com/vi/860T3WYvyoc/mqdefault.jpg',
    description: 'Trying a crossfit workout for the first time with the @Buttery Bros BUTTERY BROS https://www.youtube.com/channel/UCp00ppkfPFBUTiiNNd8kS9Q BUTTERY ...'
  },
]);

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });