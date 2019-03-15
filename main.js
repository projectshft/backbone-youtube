/* EVAL 4 

Youtube API key: AIzaSyBg4MPAVQKAhUcWR6hpfHkV2CMq-t0Pges
https://www.googleapis.com/youtube/v3/search?part=id&q=giraffes&type=video&key=AIzaSyBg4MPAVQKAhUcWR6hpfHkV2CMq-t0Pges

hierarchy:
VIEWS
    *AppView (model: AppModel)
        -CurrentVideoView (model: CurrentVideoModel)
        -VideoListView (model(s): VideoListModel)

MODELS
    *AppModel
        -VideosCollection
            -CurrentVideoModel
            -VideoListModel(s)

USER STORY 1: A user should be able to search something in the search bar, and get a list of videos back, 
with one showing up in the main screen.

USER STORY 2: When a user clicks a video in the list on the right, the main video should change to that video.

USER STORY 3: Each time a user clicks a different video, the title and description beneath the main video should update as well.

USER STORY 4: When the user first loads the page, there should be a default search so the page is not blank.
*/

//create a new instance of appModel
var appModel = new AppModel();

//create a new instance of appView with a key of model and a value of the new appModel instance
var appView = new appView({ model : appModel });