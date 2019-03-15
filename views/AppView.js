//extend the backbone View methods to AppView
var AppView = Backbone.View.extend({
  //define my el
  el: $('body'),
  //create my event listeners:
  events: {
    'click .btn-search': 'notifyAppModelOfQueryChange',
    'keypress #search-input': 'notifyAppModelOfQueryChangeOnEnter'
  },
  //declare my initializations
  initialize: function() {
    //store the #search-input element as a JQuery object so we can have access to the JQuery methods later
    this.$searchInput = this.$('#search-input');
    //listen to changes in this model's videos key, if there is a change invoke a render function
    this.listenTo(this.model.get('videos'), 'reset', this.rendePage);
  },
  //define notifyAppModelOfQueryChange, in response to the search click event
  notifyAppModelOfQueryChangeOnEnter: function(e){
    if (e.which === 13) {
      var query = this.$searchInput.val();
      this.model.get('videos').fetchData(query);
      this.$searchInput.blur();
    };
  },

  notifyAppModelOfQueryChange: function(){
    var query = this.$searchInput.val();
    //invoke function in collection that will change the url based on the passed in query.
    this.model.get('videos').fetchData(query);
  },
  //define renderPage, in response to initialize's change listener
  renderPage: function() {
    
  }
});
