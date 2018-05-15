//Utilize local storage to store all viewed videos and display the fact that they have been watched previously in any searches containing those videos.
//use .shift to remove oldest videos
var HistoryView = Backbone.View.extend({
  className: 'history py-1',

  template: Handlebars.compile($('#history-template').html()),

  events:{
    'click .this-history': 'queryThis',
  },

  queryThis: function(){
    console.log('QUERIED HISTORY:')
    console.log(this.model)

    /* I know I shouldn't call appView directly */
    appView._renderCurrentVideo(this.model);
  },

  render: function (index) {
    // console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));
    // console.log(this.model.toJSON())
    return this;
  }
})
