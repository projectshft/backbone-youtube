var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      searchName: "funniest dog videos"
    }
    }
  });


var AppView = Backbone.View.extend({
  el: $('.appView-container'),

  events: {
    'click .btn': 'initiateSearch',
  },

 

  initialize: function () {
    console.log('click')
    this.listenTo(this.model, 'change:searchName', this.renderVideo)
    
  },

  initiateSearch: function () {
    var searchName = this.$el.find('#search-query').val();

    this.model.set('searchName', searchName);
    
  },


  renderText: function () {
    this.$el.find('searchName').html(this.template(this.model.toJSON()))
  }


});



  var appModel = new AppModel();
  var appView = new AppView({ model: appModel });


 


