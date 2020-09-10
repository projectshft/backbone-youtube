// var API_KEY = 'AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU';  //spare key
// var API_KEY = 'AIzaSyASOw5XMi4dPRhAs6V4b53svoyNA2FiKks';
// // searchTerms global due to fetch() being difficult to pass args to
// var searchTerms = 'Beck Loser';

// kickoff logic
// new AppModel()
// new AppView from AppModel
// populate default search and API_KEY

var appModel = new AppModel();
var appView = new AppView({
  model: appModel
});


// classes: .main-stage .sidebar-vids
// templates:  main-stage-template  sidebar-vids-template  main-desc-template
// handlebar madlibs: {{videoId}} {{title}}{{description}}{{thumb_url}}
// define globals