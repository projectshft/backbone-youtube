// google youtube API key AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU
// classes: .main-stage .sidebar-vids
// templates:  main-stage-template  sidebar-vids-template  main-desc-template
// handlebar madlibs: {{videoId}} {{videoTitle}}{{videoDesc}}{{thumbnail}}

// AppModel create
// defaults: create a video list collection. specify main stage video
// setMainVideo: get VideoId of selected video

// VideoModel create
// defaults: title description videoId thumbnail onstage/true/false
// idAttribute??  videoId???

// Video Collection create
// URL is a function to replace https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=amiga%20retro&key=[YOUR_API_KEY]
// model based on VideoModel
// parse: snippet.title snippet.description id.videoId snippet.thumbnails.???.default.url
// can set first response to onStage? 

// AppView create
// events: submit search  (select sidebar video in sidebar videos?) (do enterkey?)
// initialize: fill with default content?  listen for video model click?
// renderApp: fill .main-stage and trigger sidebarView?
// think about what this displays

// VideoView create
// className: video
// template: sidebar-vids-template
// events click
// inits  ???
// render this

// StageView create
// className: stage
// template: main-stage-template
// initialize: listen to videoModel change: onstage; refresh render

// DetailsView create
// className: details
// template: main-details-template
// initialize: listen to videoModel change: onstage, trigger render
// 
// Sidebar create?
// iterate through [1-4] of results and render boxes of videos
// listen for onstage change, hide if true

// kickoff logic
// new AppModel()
// new AppView from AppModel
// populate defaults?
// define API key var
