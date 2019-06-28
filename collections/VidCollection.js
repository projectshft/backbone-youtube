var VidCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${userInput}&topicId=%2Fm%2F05z1_&type=video&key=AIzaSyDlV5WhGmdnkwPaMadx9_CX7QJpLCauAfE`,
  model: VidModel,
  



});
