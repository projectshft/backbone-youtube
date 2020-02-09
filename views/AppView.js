var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #searchButton': 'userSearch',

  },

  initialize: function () {
    this.$videos = $('#videoPlayer');
    this.$thumbnails = $('#thumbnails');

    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'change:mainVideo', this.render);
    
    this.APIcall('hockey')
  },
  
  template: Handlebars.compile($('#mainTemplate').html()),

  userSearch: function () {
    
    searchValue = $('#search').val()
    console.log('click ', searchValue)
    this.APIcall(searchValue);
    //clearing search textarea
    $('#search').val('');
  },

  renderVideos: function(video){
    //get first video returned from APIcall
    this.model.get('videos').at(0).set('mainVideo', true)
    var videoView = new VideoView({ model: video});
    this.$thumbnails.append(videoView.render().el);
  },

  render: function(){
    this.mainVideo = this.model.get('videos').findWhere({mainVideo: true});
    if(this.mainVideo){
      //clear main video from video player, then replace 
      this.$videos.empty();
      this.$videos.append(this.template(this.mainVideo.attributes))
      this.model.get('videos')
    }
    return this;
  },  

  APIcall: function (searchValue) {
        // AIzaSyAzyJqNn4b003qKWLcKdeUYH47sv4lRQHE    AIzaSyDSU389g62SYzzpw3bRtS-bG1XodkfiZAA   AIzaSyDwTsGaKfMqfRyLuPJalWLx2U2jPM2hhb0
    this.apiSearch = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDwTsGaKfMqfRyLuPJalWLx2U2jPM2hhb0&part=snippet&type=video&q=${searchValue}`;
    var videos = this.model.get('videos')
    videos.url = this.apiSearch;
    
    videos.fetch({
      error: function () {
        window.alert('call did not return any vidoes. Please try again.')
      }
    });
    
    console.log(videos)
  },
});
