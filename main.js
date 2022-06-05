const videoCollection = new VideoCollection();

const videoModel = new VideoModel({img: 'face', title: 'face vid', description: 'This is a video of a face!'});

videoCollection.add(videoModel)