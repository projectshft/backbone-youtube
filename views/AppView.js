//extend the backbone View methods to AppView
var AppView = Backbone.View.extend({
  //define my el
  el: $('body'),
  //compile templates for recommended section, current video section and current video lit
  templateR: Handlebars.compile($('#recommended-video-template').html()),
  templateCV: Handlebars.compile($('#current-video-template').html()),
  templateCVD: Handlebars.compile($('#current-video-description-template').html()),
  //create my event listeners:
  events: {
    'click .btn-search': 'notifyAppModelOfQueryChange',
    'keypress #search-input': 'notifyAppModelOfQueryChangeOnEnter',
    'click p': 'updateCurrentVideo'
  },
  //declare my initializations
  initialize: function() {
    //store the #search-input element as a JQuery object so we can have access to the JQuery methods later
    this.$searchInput = this.$('#search-input');
    //do the same with .recommended-list-col, .current-video-col, .current-video-description-col classes
    this.$recommendedListCol = this.$('.recommended-list-col');
    this.$currentVideoCol = this.$('.current-video-col');
    this.$currentVideoDescriptionCol = this.$('.current-video-description-col');
    //listen to for resets of the collection data and invoke renderPage if true
    this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    //listen to changes to the collection's current_Video key
    this.listenTo(this.model, 'change:current_Video', this.renderNewVideo)
    //set default to fluster Sean
    this.model.get('videos').fetchData('2009 World Series Highlights');
  },
  //define notifyAppModelOfQueryChange, in response to the search keyclick event
  notifyAppModelOfQueryChangeOnEnter: function(e){
    if (e.which === 13 && this.$searchInput.val() != '') {
      var query = this.$searchInput.val();
      //invoke function in collection that will change the fetch url based on the passed in query.
      this.model.get('videos').fetchData(query);
       //unfocus the search bar
      this.$searchInput.blur();
    } else if (e.which === 13 && this.$searchInput.val() === ''){ //taking care of an empty string edge case in here
      alert('You must enter a search parameter.');
    };
  },
  //define notifyAppModelOfQueryChange, in response to the click on the search button
  notifyAppModelOfQueryChange: function(){
    if (this.$searchInput.val() != '') {
      var query = this.$searchInput.val();
      //invoke function in collection that will change the fetch url based on the passed in query.
      this.model.get('videos').fetchData(query);
    } else alert('You must enter a search parameter.'); //again address an empty string edge case
  },
  //define renderPage, in response to initialize's change listener
  renderPage: function() {
    //make a variable for this.model.get('videos') to shorten some upcoming code
    var collection = this.model.get('videos')
    //empty the relevant html elements
    this.$recommendedListCol.empty();
    this.$currentVideoCol.empty();
    this.$currentVideoDescriptionCol.empty();
    //update the html for each one of the recommended videos
    collection.forEach(function(index){
      this.$recommendedListCol.append(this.templateR(index.toJSON()));
    }, this)
    //update the html for the current video and it's relevant lit
    this.$currentVideoCol.html(this.templateCV(collection.models[0].toJSON()));
    this.$currentVideoDescriptionCol.html(this.templateCVD(collection.models[0].toJSON()));
  },
  //define function to tell updataVideo function in the model to change the current_Video to the one that was just clicked
  updateCurrentVideo: function(e) {
    var clickedVideoID = $(e.currentTarget).data().id;
    this.model.updateVideo(clickedVideoID);
  },
  //update the relevant html for the current vid when the current_Video value changes
  renderNewVideo: function(){
    this.$currentVideoCol.empty();
    this.$currentVideoDescriptionCol.empty();

    this.$currentVideoCol.html(this.templateCV(this.model.get('current_Video').toJSON()));
    this.$currentVideoDescriptionCol.html(this.templateCVD(this.model.get('current_Video').toJSON()));
  }
});


