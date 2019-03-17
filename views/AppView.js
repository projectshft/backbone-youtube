var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        // AppView recognizes search clicked, calls function to grab the query
      'click .submit-search': 'fetchVideo',
  
    },
  
    initialize: function () {

      this.$searchInput = this.$('#search-input');

      this.listenTo(this.model.get('videos'), 'reset', this.render);
      this.listenTo(this.model.get('videos'), 'reset', this.play);
     
    },

        // Grabs the query from the search, tells the Collection to fetch videos.
        // Upon Collection successfully returning the video models,
        
  
    fetchVideo: function() {

          const query = this.$searchInput.val();

          this.model.get('videos').fetchVideos(query);
    },

    render: function() {
   
      this.model.get('videos').each(function (v) { // For each of the 5 unique models
     

        const title = v.get('title'); // Extract data info from video models
        const description = v.get('description');
        const thumbnails = v.get('thumbnails');
  
        const source = $('#video-template').html(); // Render to page with handlebars template
        const template = Handlebars.compile(source)
        const newHTML = template({title, description, thumbnails});
        this.$('.card-1').append(newHTML);

        return this;

      });
    },

    play: function() { // renders the first returned video
      console.log('Inside play function...');

      const first = this.model.get('videos').first(); 
      const firstId = first.get('videoId');
  
      const firstUrl = 'https://www.youtube.com/embed/' +firstId+ '?rel=0';
        
      const firstTitle = first.get('title');
      const firstDescription = first.get('description');

      const source = $('#play-template').html();
      const template = Handlebars.compile(source)
      const newHTML = template({firstUrl, firstTitle, firstDescription});
      this.$('.video').append(newHTML);

      return this;
      
    }

   
  });
  