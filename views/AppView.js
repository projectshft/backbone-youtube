var AppView = Backbone.View.extend({
  el: $('body'),
  // events to listen for
  events: {
    'click .searchButton': 'searchVideo'
  },
  initialize: function () {
    this.model.get('videos').searchVideos(this.model.get('query'));
    this.$videoSearch = this.$('#video-search');
    this.listenTo(this.model.get('videos'), 'reset', this.renderCurrent);

  },
//video-search 

  searchVideo: function(e) {
    const query = this.$videoSearch.val();
    //condition ? exprIfTrue : exprIfFalse 

    this.model.get('videos').searchVideos(query)

  },

  renderCurrent: function() {


    $('.video').empty(); 

    const first = this.model.get('videos').first(); 
    const Id = first.get('videoId');

    const Url = 'https://www.youtube.com/embed/' +firstId; 

    const Title = first.get('title');
    const Description = first.get('description');

    const source = $('#current-video-template').html(); 
    const template = Handlebars.compile(source)
    const newTemplate = template({Url, Title, Description});

    this.$('.video').append(newTemplate); 

    return this;

    // display current
  },







});
