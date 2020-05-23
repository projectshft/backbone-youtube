// var appModel = new AppModel();

// var appView = new AppView({ model: appModel });

const testObj = {
  currentVideo: {
    title:  'This is the current video',
    description: 'test description',
    videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
  },

  videoList: [
    {
      title: 'video 1',
      description: 'test description',
      videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
    },
    {
      title: 'video 2',
      description: 'test description',
      videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
    },
    {
      title: 'video 3',
      description: 'test description',
      videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
    },
    {
      title: 'video 4',
      description: 'test description',
      videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
    }
  ]
}

const renderVideos = () => {
  $('#current-video-div').empty();
  $('#video-list-div').empty();

  currentVideoSource = $('#current-video-template').html();
  const currentTemplate = Handlebars.compile(currentVideoSource);
  const newCurrentVideoHTML = currentTemplate(testObj.currentVideo);
  $('#current-video-div').append(newCurrentVideoHTML);

  
  listVideoSource = $('#video-list-template').html();
  const listTemplate = Handlebars.compile(listVideoSource);

  for (let i = 0; i < testObj.videoList.length; i++) {
    const newListVideoHTML = listTemplate(testObj.videoList[i]);
    $('#video-list-div').append(newListVideoHTML);
  }
}

renderVideos();