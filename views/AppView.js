var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        // AppView recognizes search clicked, calls function to grab the query
      'click .submit-search': 'fetchVideo',
  
    },
  
    initialize: function () {

      this.$searchInput = this.$('#search-input');

      this.listenTo(this.model.get('videos'), 'reset', this.render);
     
    },

        // Grabs the query from the search, tells the Collection to fetch videos.
        // Upon Collection successfully returning the video models,
        // renders the first returned video
  
    fetchVideo: function() {

          const query = this.$searchInput.val();
          console.log(query);
          this.model.get('videos').fetchVideos(query);
    },

    render: function() {
   
      this.model.get('videos').each(function (v) { // For each of the 5 unique models
     

        const title = v.get('title'); // Extract data info from video models
        const description = v.get('description');
        const thumbnails = v.get('thumbnails');
  
        var source = $('#video-template').html(); // Render to page with handlebars template
        var template = Handlebars.compile(source)
        var newHTML = template({title, description, thumbnails});
        this.$('.card-1').append(newHTML);

        return this;

      });
    },

   
  });
  