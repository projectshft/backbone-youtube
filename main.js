var appModel = new AppModel();

var appView = new AppView({
  model: appModel
});

appModel.get('videos').fetch({
  success: function() {
    var videoRouter = new VideoRouter();
    Backbone.history.start();
  }
}, {reset: true});
