AppView = Backbone.View.extend({
  el: '#form-area',

  events: {
    'click #main-button': 'getData',
  },

  getData: function () {
    var $input = this.$el.find('#main-input')
    
    var issue = new VideoCollection();
    issue.urlSearchAppender( $input.val() )
    issue.fetch().then(function(){ console.log(issue); });
    // var newSidebar = new SidebarView();
  }
});
