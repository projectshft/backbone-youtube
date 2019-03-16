//extend the backbone View methods to AppView
var AppView = Backbone.View.extend({
  //define my el
  el: $('body'),
  //compile template for current video section
  template: Handlebars.compile($('#recommended-video-template').html()),
  //create my event listeners:
  events: {
    'click .btn-search': 'notifyAppModelOfQueryChange',
    'keypress #search-input': 'notifyAppModelOfQueryChangeOnEnter'
  },
  //declare my initializations
  initialize: function() {
    //store the #search-input element as a JQuery object so we can have access to the JQuery methods later
    this.$searchInput = this.$('#search-input');
    this.$recommendedListCol = this.$('.recommended-list-col')
    //listen to changes in this model's videos key, if there is a change invoke a render function
    this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
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
    // console.log(this.model.attributes.videos);
    // this.$('recommended-list-col').html(this.template(this.model.toJSON()));
    this.$recommendedListCol.empty();
    var recommendedArray = this.model.attributes.videos.models.splice(1,5);
      recommendedArray.forEach(function(index){
        this.$recommendedListCol.append(this.template(index.toJSON()));
      }, this)
    // return this
  }
});


