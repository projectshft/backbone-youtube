//extend the backbone View methods to AppView
var AppView = Backbone.View.extend({
  //define my el
  el: $('body'),
  //compile template for current video section
  templateR: Handlebars.compile($('#recommended-video-template').html()),
  templateCV: Handlebars.compile($('#current-video-template').html()),
  templateCVD: Handlebars.compile($('#current-video-description-template').html()),
  //create my event listeners:
  events: {
    'click .btn-search': 'notifyAppModelOfQueryChange',
    'keypress #search-input': 'notifyAppModelOfQueryChangeOnEnter'
  },
  //declare my initializations
  initialize: function() {
    //store the #search-input element as a JQuery object so we can have access to the JQuery methods later
    this.$searchInput = this.$('#search-input');
    this.$recommendedListCol = this.$('.recommended-list-col');
    this.$currentVideoCol = this.$('.current-video-col');
    this.$currentVideoDescriptionCol = this.$('.current-video-description-col');
    console.log($('.current-video-description-col').html());
    //listen to changes in this model's videos key, if there is a change invoke a render function
    this.listenTo(this.model.get('videos'), 'reset', this.renderPage);

    this.model.get('videos').fetchData('2009 World Series Highlights');
  },
  //define notifyAppModelOfQueryChange, in response to the search click event
  notifyAppModelOfQueryChangeOnEnter: function(e){
    if (e.which === 13 && this.$searchInput.val() != '') {
      var query = this.$searchInput.val();
      this.model.get('videos').fetchData(query);
      this.$searchInput.blur();
    } else if (e.which === 13 && this.$searchInput.val() === ''){
      alert('You must enter a search parameter.');
    };
  },

  notifyAppModelOfQueryChange: function(){
    if (this.$searchInput.val() != '') {
      var query = this.$searchInput.val();
      //invoke function in collection that will change the url based on the passed in query.
      this.model.get('videos').fetchData(query);
    } else alert('You must enter a search parameter.');
  },
  //define renderPage, in response to initialize's change listener
  renderPage: function() {
    this.$recommendedListCol.empty();
    this.$currentVideoCol.empty();
    this.$currentVideoDescriptionCol.empty();

    this.model.recommendedArray().forEach(function(index){
      this.$recommendedListCol.append(this.templateR(index.toJSON()));
    }, this)

    this.$currentVideoCol.html(this.templateCV(this.model.topVideoIndex().toJSON()));
    this.$currentVideoDescriptionCol.html(this.templateCVD(this.model.topVideoIndex().toJSON()));
  }
});


