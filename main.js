// Creating a New instance of Application Model, Application Model is creating a new instance of Video Collection, Video Collection is a collection of Video Models //
const applicationModel = new ApplicationModel();
// Adding Dummy Data to the Application //
applicationModel
  .get('videos')
  .addVideo(
    'Trail Running for Beginners || REI',
    "Whether you're looking for a way to shake up your running routine or are getting into running for the first time, trail running is an ...",
    'https://i.ytimg.com/vi/7LmSHc_bckw/default.jpg',
    '7LmSHc_bckw'
  );
applicationModel
  .get('videos')
  .addVideo(
    'Trail Running for Beginners || REI',
    "Whether you're looking for a way to shake up your running routine or are getting into running for the first time, trail running is an ...",
    'https://i.ytimg.com/vi/7LmSHc_bckw/default.jpg',
    '7LmSHc_bckw'
  );
applicationModel
  .get('videos')
  .addVideo(
    'Trail Running for Beginners || REI',
    "Whether you're looking for a way to shake up your running routine or are getting into running for the first time, trail running is an ...",
    'https://i.ytimg.com/vi/7LmSHc_bckw/default.jpg',
    '7LmSHc_bckw'
  );
applicationModel
  .get('videos')
  .addVideo(
    'Trail Running for Beginners || REI',
    "Whether you're looking for a way to shake up your running routine or are getting into running for the first time, trail running is an ...",
    'https://i.ytimg.com/vi/7LmSHc_bckw/default.jpg',
    '7LmSHc_bckw'
  );
applicationModel
  .get('videos')
  .addVideo(
    'Trail Running for Beginners || REI',
    "Whether you're looking for a way to shake up your running routine or are getting into running for the first time, trail running is an ...",
    'https://i.ytimg.com/vi/7LmSHc_bckw/default.jpg',
    '7LmSHc_bckw'
  );

// Creating a New instance of Application View //
const applicationView = new ApplicationView({ model: applicationModel });
