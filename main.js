/**************************************************
  Google Dev Project Name: Backbone-Video-
  API-Key: AIzaSyBhEipxN2X8twvxFy7Uck1ehRxzzyjZQXY
 * ***********************************************/

const appModel = new AppModel();

const appView = new AppView({ model: appModel });

appModel.get('videos').fetch({ reset: true });
