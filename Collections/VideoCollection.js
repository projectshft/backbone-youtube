var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&q=test&type=video&key=AIzaSyAHIxQiOVT5-aeAYSbPo50xltCAt4B9Hok',
  model: VideoModel,
});
