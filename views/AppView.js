var AppView = Backbone.View.extend({
    el: $('body'),

    events: {
        // AppView recognizes search clicked, calls function to grab the query
      'click .submit-search': 'fetchVideo',

    },

    initialize: function () {

      this.$searchInput = this.$('#search-input');

        // When the document is first loaded, display videos using default query
      this.model.get('videos').fetchVideos(this.model.get('query'));

        // When API is fetched and 'reset' broadcasted,
        // display a list of 5 video thumbnails and play first video
      this.listenTo(this.model.get('videos'), 'reset', this.render);
      this.listenTo(this.model.get('videos'), 'reset', this.play);

    },

      // Takes user search query and passes to Collection to get videos from the API
    fetchVideo: function() {

          const query = this.$searchInput.val();

            // Testing for edge cases
            // If search is empty, alert error to user
          if(query.length == 0) {
            alert('Enter a valid search');
          }

          this.model.get('videos').fetchVideos(query);
    },

      // Upon Collection successfully returning the video models,
      // display thumbnail list view of first 5 videos
    render: function() {

      $('.card-1').empty(); // Clears video thumbnails list

      this.model.get('videos').each(function (v) { // For each of the 5 unique models

        const title = v.get('title'); // Extract data info from video models
        const description = v.get('description');
        const thumbnails = v.get('thumbnails');

        const source = $('#video-template').html(); // Render to page with Handlebars template
        const template = Handlebars.compile(source)
        const newHTML = template({title, description, thumbnails});

        this.$('.card-1').append(newHTML); // Renders video thumbnails list

        return this;

      });
    },

      // Renders the first returned video using iframe embed url
    play: function() {

      $('.video').empty(); // Clear first video display

      const first = this.model.get('videos').first(); // For the first video in collection
      const firstId = first.get('videoId');

      const firstUrl = 'https://www.youtube.com/embed/' +firstId+ '?rel=0'; // Set url to first video id

      const firstTitle = first.get('title');
      const firstDescription = first.get('description');

      const source = $('#play-template').html(); // Render to page with Handlebars template
      const template = Handlebars.compile(source)
      const newHTML = template({firstUrl, firstTitle, firstDescription});

      this.$('.video').append(newHTML); // Renders first video display

      return this;

    }

  });
