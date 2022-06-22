var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videosCollection,
    }
  }
});

var VideosModel = Backbone.Model.extend({
  idAttribute: '_id',
   defaults: {
     title: '',
     description: '',
     thumbnails: '',
     videoId: ''
   }
});

var VideosCollection = Backbone.Collection.extend({
  model: VideosModel,
  
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyDJP_kbSFYteTAEL6Dao64hwbagEOuZT_c",
});

var AppView = Backbone.View.extend({
  el: $('#video-template'),
  events: {    
    'click .btn': 'displayVideos'
  },

  initialize: function () {
    
  },

  displayVideos: function () {
    console.log('click');
  }
 
   
    
    // this.add(
    //   this.$el.html(this.template('{{title}}'),
    //   this.$('{{description}}'),
    //   this.$('{{thumbnails}}'),
    //   this.$('{{videoId}}'))
});
   

var videosView = new AppView({
  render: function () {
      var source = $('#main-video-template').html();
      var template = Handlebars.compile(source);
      var html = template(this.videosCollection.models.toJSON());
      
      this.$el.html(html);

  }
});




var videosCollection = new VideosCollection();
 
  videosCollection.fetch({
   success: function () {
     console.log(videosCollection.models);
   }
  });


// var videosModel1 = new VideosModel({title: "6 Websites to Make £500 in a Day! (UK Only)", description: "In this video, we will show you how to connect your content management system (CMS) to TeamSlide using our web portal." , thumbnails: "https://i.ytimg.com/vi/kz7gQOEgI-o/mqdefault.jpg" , videoID: "kz7gQOEgI-o"});
// var videosModel2 = new VideosModel({title: "How to Connect your CMS to TeamSlide", description: "How to make money online UK seems to be a popular search term here on YouTube so I thought I would share sites such as ..." , thumbnails: "https://i.ytimg.com/vi/Tm28jd-wMoE/mqdefault.jpg" , videoID: "Tm28jd-wMoE"});
// var videosModel3 = new VideosModel({title: "3. How to Use Canva’s Flexible Search Tool | Canva on your Phone", description: "Hak5 -- Cyber Security Education, Inspiration, News & Community since 2005: This time on the show I'm checking out EaseUS's ..." , thumbnails: "https://i.ytimg.com/vi/DoAgzK2tZ2s/mqdefault.jpg" , videoID: "DoAgzK2tZ2s"});
// var videosModel4 = new VideosModel({title: "HakTip - An Easy To Use Alternative Local Backup Tool!", description: "Hak5 -- Cyber Security Education, Inspiration, News & Community since 2005: This time on the show I'm checking out EaseUS's ..." , thumbnails: "https://i.ytimg.com/vi/DoAgzK2tZ2s/mqdefault.jpg" , videoID: "DoAgzK2tZ2"});
// var videosModel5 = new VideosModel({title: "Settings search - solution validation concept", description: "https://gitlab.com/gitlab-org/ux-research/-/issues/1298." , thumbnails: "https://i.ytimg.com/vi/qLBd-er-YzA/mqdefault.jpg" , videoID: "qLBd-er-YzA"});


// var mainVideoView = new AppView({
//   model: VideosModel,
  
// });
// var sideVideosView = new AppView({
//   model: VideosModel,
  
// });

// $(document).ready(function(){
//   mainVideoView.el = $('#main-video-template');
//   sideVideosView.el = $('#side-videos-template');

//   videosCollection.add(VideosModel);
//   videosCollection.add(videosModel1);
//   videosCollection.add(videosModel2);
//   videosCollection.add(videosModel3);
//   videosCollection.add(videosModel4);
//   videosCollection.add(videosModel5);

//   console.log(videosCollection.length);

  videosView.render(videosCollection.models);
 
