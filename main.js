var VideoDetailView = Backbone.View.extend({
    template: Handlebars.compile($('#video-detail-template').html()),
  
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
  
      return this;
    }
  });
  
  var VideoListItemView = Backbone.View.extend({
    template: Handlebars.compile($('#video-item-template').html()),
  
    // events: {
    //   'click' : 'handleListItemClick'
    // },
  
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
  
      return this;
    },
  
    // Handling the currentVideo problem with a callback
    // handleListItemClick: function() {
    //   console.log('handling click inside list item',this.onClickCallback);
    //   this.onClickCallback();
    // },
  
    // onClickCallback: null,
  
    // setOnClickCallback: function(callback) {
    //   this.onClickCallback = callback
    // }
  });
  
  var VideoModel = Backbone.Model.extend({
    defaults: {
      videoId: '',
      title: '',
      description: '',
      thumbnail: ''
    }
  });
  
  var VideoCollection = Backbone.Collection.extend({
    model: VideoModel,
  
    fetchVideos: function(query) {
      this.url = 'https://www.googleapis.com/youtube/v3/search?key=' + query;
      // When we fetch we send the reset value to trigger a reset event on the model that we can watch for on the view
      this.fetch({reset:true})
    },
  
    parse: function (response) {
      return response.items.map(function (item) {
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
        }
      });
    }
  });
  
  var AppModel = Backbone.Model.extend({
    defaults: function () {
      return {
        videos: new VideoCollection(),
        currentVideo: null,
        query: 'ponies'
      }
    },
  
    initialize: function () {
      this.reloadVideos();
      
      // Whenever the query value changes requery the videos from the server
      this.on('change:query', this.reloadVideos);
      // Whenever the video list gets reset, set the first video of the list to be the current video
      this.on(this.get('videos'), 'reset', this.updateCurrentVideoToFirstFromNewVideoList);
    },
  
    reloadVideos: function () {
      // Tell the VideoCollection to get new videos based on the current user query
      this.get('videos').fetchVideos(this.get('query'))
    },
  
    updateCurrentVideoToFirstFromNewVideoList: function() {
      // As long as we have videos, set the first one that we got back to be the current video
      if (this.get('videos')) {
        this.set('currentVideo', this.get('videos').models[0]);
      }
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $('body'),
  
    events: {
      'click button': 'handleNewUserQuery',
      'keypress #search-input': 'handleNewUserQuery',
      'click .video-item': 'changeCurrentVideo'
    },
  
    initialize: function () {
      this.listenTo(this.model.get('videos'), "reset", function () {
        // When the list of videos change, re-render everything
        this.renderVideoDetail();
        this.renderVideoList();
      }).bind(this);
  
      this.listenTo(this.model, "change:currentVideo", function () {
        // When the current video changes, just re-render the video detail
        this.renderVideoDetail();
      }).bind(this);
    },
  
    handleNewUserQuery: function (e) {
      // Handle either taps of the enter key or click events
      if ((e.type === 'keypress' && e.keyCode === 13) || (e.type === 'click')) {
        let userQueryValue = this.$el.find('input').val();
        // Check if the user submitted a value in the input
        if (userQueryValue != ''){
          // When a user creates a new query, grab the input value and set the query in the model to that value
          this.model.set('query',userQueryValue);
        }
      }
    },
  
    changeCurrentVideo: function (e) {
      // This is one way to handle the currentVideo issue.  It is a bit more of a violation of the rules of data flow to rely on data stored in the model, but as it's more of a reference it's not a big deal. 
      // Get the id from the html element that was clicked
      var videoId = $(e.currentTarget).data().id;
  
      // Find the model for the new current video from the list of models
      var newCurrentVideo = this.model.get('videos')
        .findWhere({ videoId: videoId });
  
      // Update the current video in the app model
      this.model.set('currentVideo', newCurrentVideo);
    },
  
    renderVideoDetail: function () {
      this.$('#video-detail').html(new VideoDetailView({
        // for the first video that get's loaded to the API, current_video
        // has not yet been set, so we set it from the top of the collection
        model: this.model.get('currentVideo') || this.model.get('videos').models[0]
      }).render().el)
    },
  
    renderVideoList: function () {
      this.$el.find('#video-list').empty();
  
      for (var i = 0; i < this.model.get('videos').models.length; i++) {
        var videoModel = this.model.get('videos').models[i];
        var videoListItemView = new VideoListItemView({ model: videoModel });
  
        // Another way to handle the 'change current video' problem is to pass a callback to the VideoListItemView that knows how to update the app model
        // var appModel = this.model;
        // videoListItemView.setOnClickCallback(function() {
        //   appModel.set('currentVideo',videoModel);
        // })
  
        this.$el.find('#video-list').append(videoListItemView.render().el)
      }
    }
  });
  
  var appModel = new AppModel();
  var appView = new AppView({ model: appModel });