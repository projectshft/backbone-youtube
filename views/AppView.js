var AppView = Backbone.View.extend({
  el: $('body'),

  // event listeners: keypress is for searching and hitting center
  //                  click is for updating the mainVid to whichever vid on the side was clicked
  events: {
    'keypress #search': 'searchVids',
    'click .vid-list-new': 'updateMainVid'
  },

  initialize: function() {
    // default search for when page loads
    this.model.get('vids').fetchVids(this.model.get('searchQuery'));
    // listen for change in main vid then render it
    this.listenTo(this.model, 'change:main_vid', this.renderMainVid);
    // listen for a new search then update the view
    this.listenTo(this.model.get('vids'), 'reset', function() {
      this.renderMainVid();
      this.renderVidList();
    });
  },

  searchVids: function(e) {
    // enter is clicked and search input box isnt empty
    if (e.which == 13 && this.$('#search').val()) {
      // reset mainVid, set the value from the search box into the API request
      this.model.set('main_vid', null);
      this.model.set('searchQuery', this.$('#search').val());
      this.model.get('vids').fetchVids(this.model.get('searchQuery'));

      this.$('#search').val('');
    }
  },

  renderVidList: function() {
    this.$('.vid-list').empty();
    var vidList = this.model.get('vids').models;
    // iterate through the models and then display them
    vidList.forEach(vid => {
      var vidListView = new VidListView({
        model: vid
      });
      this.$('.vid-list').append(vidListView.render().el);
    });
  },

  renderMainVid: function() {
    var mainVidView = new MainVidView({
      // set main vid to vid clicked on from side menu OR the first vid in the search response
      model: this.model.get('main_vid') || this.model.get('vids').models[0]
    });
    this.$('.main-vid-section').html(mainVidView.render().el);
  },

  updateMainVid: function(e) {
    // get the id of the vid that was clicked
    var clickedVidID = e.target.dataset.id;
    // find where the id matches in the collection
    var clickedVid = this.model.get('vids').findWhere({
      id: clickedVidID
    });
    // set main vid to the vid that was clicked
    this.model.set('main_vid', clickedVid);
  },


});
