var AppView = Backbone.View.extend({
  el: $('body'),


  events: {
    'click .search-video': 'fetchVideoList',
    'click .icon0': 'newMainVideo0',
    'click .icon1': 'newMainVideo1',
    'click .icon2': 'newMainVideo2',
    'click .icon3': 'newMainVideo3',
    'click .icon4': 'newMainVideo4',
 

  },

  initialize: function() {
    this.addVideos0(initialVideos);
    search = 'none';

  },

  fetchVideoList: function() {
    term = this.$('#search-query').val();
    var that = this;

    $.ajax({
      method:'get',
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+ term +'&type=video&videoEmbeddable=true&key=AIzaSyBs6qNJBiNM2cG7lsgYPC5xfrLdcpJx4Eg',
      dataType: 'json',
      success: function(data) {
        search = 'something'
        videosCollection = data;
        that.addVideos(data);
      },
      error: function(jqHXR, textstatus, errorThrown) {
        console.log(textstatus)
      }
    })
  },

  addVideos: function(data) {
    var videos = []
    for (var i = 0; i < 5; i++) {
      videos.push({
        index: i,
        id: data.items[i].id.videoId,
        title: data.items[i].snippet.title,
        description: data.items[i].snippet.description
      })
    }
    this.renderMainVideo($(videos).get(0));
    for (var i=0; i<5; i++) {
      this.renderVideoList($(videos).get(i));
    }
  },


  renderMainVideo: function(data) {
    var source = $('#main-video-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(data);
    $('.grid').empty().append(newHTML);
  },

  renderVideoList: function(videos) {
    var source = $('#video-sidebar-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(videos);

    $('.grid').append(newHTML);
  },

  newMainVideo0:function() {
    if (search !== 'none'){
      this.addVideos0(videosCollection)
      } else {
        this.addVideos0(initialVideos)
      }
  },
  addVideos0: function(data) {
    var videos = []
    for (var i = 0; i < 5; i++) {
      videos.push({
        index: i,
        id: data.items[i].id.videoId,
        title: data.items[i].snippet.title,
        description: data.items[i].snippet.description
      })
    }
    this.renderMainVideo($(videos).get(1));
    for (var i=0; i<5; i++) {
      this.renderVideoList($(videos).get(i));
    }
  },

  newMainVideo1:function() {
    if (search !== 'none'){
    this.addVideos1(videosCollection)
    } else {
      this.addVideos1(initialVideos)
    }
  },
  addVideos1: function(data) {
    var videos = []
    for (var i = 0; i < 5; i++) {
      videos.push({
        index: i,
        id: data.items[i].id.videoId,
        title: data.items[i].snippet.title,
        description: data.items[i].snippet.description
      })
    }
    this.renderMainVideo($(videos).get(1));
    for (var i=0; i<5; i++) {
      this.renderVideoList($(videos).get(i));
    }
  },

  newMainVideo2:function() {
    if (search !== 'none'){
      this.addVideos2(videosCollection)
      } else {
        this.addVideos2(initialVideos)
      }
  },
  addVideos2: function(data) {
    var videos = []
    for (var i = 0; i < 5; i++) {
      videos.push({
        index: i,
        id: data.items[i].id.videoId,
        title: data.items[i].snippet.title,
        description: data.items[i].snippet.description
      })
    }
    this.renderMainVideo($(videos).get(2));
    for (var i=0; i<5; i++) {
      this.renderVideoList($(videos).get(i));
    }
  },

  newMainVideo3:function() {
    if (search !== 'none'){
      this.addVideos3(videosCollection)
      } else {
        this.addVideos3(initialVideos)
      }
  },
  addVideos3: function(data) {
    var videos = []
    for (var i = 0; i < 5; i++) {
      videos.push({
        index: i,
        id: data.items[i].id.videoId,
        title: data.items[i].snippet.title,
        description: data.items[i].snippet.description
      })
    }
    this.renderMainVideo($(videos).get(3));
    for (var i=0; i<5; i++) {
      this.renderVideoList($(videos).get(i));
    }
  },

  newMainVideo4:function() {
    if (search !== 'none'){
      this.addVideos4(videosCollection)
      } else {
        this.addVideos4(initialVideos)
      }
  },
  addVideos4: function(data) {
    var videos = []
    for (var i = 0; i < 5; i++) {
      videos.push({
        index: i,
        id: data.items[i].id.videoId,
        title: data.items[i].snippet.title,
        description: data.items[i].snippet.description
      })
    }
    this.renderMainVideo($(videos).get(4));
    for (var i=0; i<5; i++) {
      this.renderVideoList($(videos).get(i));
    }
  },
});