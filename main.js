var appModel = new AppModel();

appModel.getVideos("turtle");


var mainVideoView = new MainVideoView({
  description: "Please SUBSCRIBE - http://bit.ly/BWchannel Tour Tickets Available Now! - http://bit.ly/bravetickets Buy Brave Wilderness Gear - http://bit.ly/BWmerch Buy ...",
  thumbnailURL: "https://i.ytimg.com/vi/7c7Oz5yNGkE/default.jpg",
  title: "Catching Sea Turtles!",
  videoId: "7c7Oz5yNGkE"
});

mainVideoView.render();
