var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit': 'searchVideo'

  },
  initialize: function (){
    console.log('view initialized')
    // this.listenTo(this.model.get('videos'), 'reset', this.renderPage)
  },

  renderPage: function () {

  },

  searchVideo: function(){
    console.log('search video function accessed')
    var textData = $('#txtSearch').val();
    this.model.get('videos').search = textData;
    this.model.get('videos').fetch({
      success: function (){

      }
    });
  }
})

var appView = new AppView({
  model: appModel
});
