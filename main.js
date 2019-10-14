// Backbone YouTube Project
// API -- https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&q=test&type=video&
// my API key -- key=AIzaSyAHIxQiOVT5-aeAYSbPo50xltCAt4B9Hok

// User should be able to search in search bar, get a list of videos back, with one
// showing up on the main screen.

// User clicks a video in the list on the right, main video should change to clicked video.

// Each time a user clicks a new video, the title and description should update.

// When user loads page, there should be a default search with videos loaded so page is not blank.


var appModel = new AppModel();
var appView = new AppView({
  model: appModel
});
