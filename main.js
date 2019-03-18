/* EVAL 4 

Project: "March 16" api key: AIzaSyDZpBTnPo92ZA7Tu5MxFZL2u-If5TV2Hs4

looking at the view and saying all the decisions that the view are making, where are they coming from in the model
the view isn't making stuff up

edge case:
javascript if the input is empty, just return
if string is gibberish, show "results not found"

hierarchy:
VIEWS
    *AppView (model: AppModel)
        -CurrentVideoView (model: VideoModel)
        -VideoListView (model: VideoModel)

MODELS
    *AppModel
        -VideosCollection
            -VideoModel


USER STORY 1: A user should be able to search something in the search bar, and get a list of videos back, 
with one showing up in the main screen.

USER STORY 2: When a user clicks a video in the list on the right, the main video should change to that video.

USER STORY 3: Each time a user clicks a different video, the title and description beneath the main video should update as well.

USER STORY 4: When the user first loads the page, there should be a default search so the page is not blank.
*/

//create a new instance of appModel
var appModel = new AppModel();

//create a new instance of appView with a key of model and a value of the new appModel instance
var appView = new AppView({ model : appModel });
