/**************************************************
  Google Dev Project Name: Backbone-Video-
  API-Key: AIzaSyBhEipxN2X8twvxFy7Uck1ehRxzzyjZQXY
 * ***********************************************/

let appModel = new AppModel();

let appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });
