
var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});

var PlaylistView = Backbone.View.extend({
  className: 'playlist',

  template: Handlebars.compile($('#playlist-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});



var VideosModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    thumbnailUrl: '',
    vidId: ''
   },
   
   url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=crossfit&type=video&videoEmbeddable=true&key=AIzaSyBqasNQXXkWqA8VHZVmNuqC3bwZrQR3mcY`, 

   parse:function (response) {
    console.log(response);

    return {
      title: response.items[0].snippet.title,
      description: response.items[0].snippet.description,
      thumbnailUrl: response.items[0].snippet.thumbnails.medium.url,
      vidId: response.items[0].id.videoId
    }
   },

   searchVideo: function (vidId) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${vidId}&type=video&videoEmbeddable=true&key=AIzaSyBqasNQXXkWqA8VHZVmNuqC3bwZrQR3mcY`;
  },

   
});

var VideosCollection = Backbone.Collection.extend({
  model: VideosModel,

  initialize:function() {
    this.on('add', function(model){
      console.log(model)
      model.fetch();
    })
  },

});


var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection()
    }
  }
});

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search':'findVideo',

  },

  initialize: function() {
    this.$searchInput = this.$('#search-query');
    this.$videos = this.$('.videos');
    this.$playlist = this.$('.playlist');


    this.listenTo(this.model.get('videos'), 'change', this.renderVideo);
    this.listenTo(this.model.get('playlist'), 'change', this.renderPlaylist);

  },

  findVideo: function() {
    var videoSearch = this.$searchInput.val();  

    this.model.get('videos').add({
      id: videoSearch
    });
  },

  renderVideo: function(model) {
    var videoView = new VideoView({model: model});

    this.$videos.append(videoView.render().el);
  },

  renderPlaylist: function(model) {
    var playlistView = new PlaylistView({model: model});

    this.$playlist.append(playlistView.render().el);
  },

});


var appModel = new AppModel();

appModel
  .get('videos')
  .add([
    {
      id: 1,
      title: 'Women’s Quarterfinal Test 2: Fantasy Matchup—Toomey-Orr, Adams, O&#39;Brien, and Saghafi',
      description: 'Check out @Tia-Clair Toomey & Shane Orr, Haley Adams, Mallory OBrien, and Feeroozeh Saghafi as they go head-to-head in the second test of the 2021 ...',
      thumbnailUrl:
        'https://i.ytimg.com/vi/4RHxAjW-xd4/mqdefault.jpg',
    },
    {
      id: 2,
      title: 'UNBROKEN OR BUST // RICH FRONING’S *FULL* TEST 3 - CROSSFIT QUARTERFINALS',
      description: 'All things Mayhem Nation https://www.mayhemnation.com/ ⚡️ Become a Mayhem Athlete ⚡️ https://www.mayhemnation.com/pages/mayhem-nation-athlete ...',
      thumbnailUrl:
        'https://i.ytimg.com/vi/uicN0Uxqcuk/mqdefault.jpg',
    },
    {
      id: 3,
      title: '21.1 CrossFit Open Announcement',
      description: 'Watch the live announcement of the first workout to kick off the worlds largest participatory sporting event in history. The 2021 NOBULL CrossFit Open starts ...',
      thumbnailUrl:
        'https://i.ytimg.com/vi/kNCc9Ajipjo/mqdefault.jpg',
    },
    {
      id: 4,
      title: 'RICH FRONING’S FULL TEST 2 // CrossFit Games Quarterfinals',
      description: 'Use the Team Invite Code: COMM-C1F2CC to join the "Mayhem Athletes" Community on WHOOP and be included in giveaways and exclusive offers.',
      thumbnailUrl:
        'https://i.ytimg.com/vi/7xwGBWetiMo/mqdefault.jpg',
    },
    {
      id: 5,
      title: 'The QUARTERFINALS of the CrossFit Games',
      description: 'The QUARTERFINALS of the CrossFit Games.',
      thumbnailUrl:
        'https://i.ytimg.com/vi/78PnloxFYOM/mqdefault.jpg',
    },
  ]);

var appView = new AppView({ model:appModel });

