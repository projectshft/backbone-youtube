/*Basic skeleton of my youtibe clone: Every video will be it's own iteration of the video model. However wach model can have one of two views: will be wither the current video view or in the sidebar in the related videos.

The video models will be populated with data using the VideoCollection collection. Tere is no setting or deleting, only getting. The collection will take in search input, and fill videoModels with data accordingly (after parsing for name, description, thumbnail, url, and the unique video ID).

The video Collection will be an attribute on the AppView, which will lsiten for any changes in the collection, and use that event to re render the videos on the page. The appview will also be listening for click events on the search bar, which will call for the collection to reset and re-fill with data */

var appModel = new AppModel();

var appView = new AppView({model:appModel})
