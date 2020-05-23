var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videosCollection: new VideosCollection(    [
        {
          id: 1,
          title: 'video 1',
          description: 'test description',
          videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
        },
        {
          id: 2,
          title: 'video 2',
          description: 'test description',
          videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
        },
        {
          id: 3,
          title: 'video 3',
          description: 'test description',
          videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
        },
        {
          id: 4,
          title: 'video 4',
          description: 'test description',
          videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
        }
      ]),
    
      current_video:  {
        id: 1,
        title: 'video 1',
        description: 'test description',
        videoURL: "https://www.youtube.com/embed/XSZVMeynt5s"
      }

    }
  },

  //this will be called from app view when a video from the list is clicked. That video's id will be passed in and used to set the appModel's current video to the clicked video
  changeCurrentVideoOnAppModel: function (id) {
    var currentVideosCollection = this.get('videosCollection');

    var currentVideo = currentVideosCollection.findWhere({ id: id });

    this.set('current_video', currentVideo);
  }
}) 