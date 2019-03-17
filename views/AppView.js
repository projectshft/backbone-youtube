var AppView = Backbone.View.extend({
    el: $('body'),

    //tagName: 'aside',  

    template: Handlebars.compile($('#video-template').html()),

    events: {
        // AppView recognizes search clicked, calls function to grab the query
      'click .submit-search': 'fetchVideo',
  
    },
  
    initialize: function () {

      this.$searchInput = this.$('#search-input');

      this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

      this.$videoList1 = this.$('.card-1');
      this.$videoList2 = this.$('.card-2');
     
    },

        // Grabs the query from the search, tells the Collection to fetch videos.
        // Upon Collection successfully returning the video models,
        // renders the first returned video
  
    fetchVideo: function() {

          const query = this.$searchInput.val();
          console.log(query);
          this.model.get('videos').fetchVideos(query);
    },



    renderVideos: function() {
   
      this.model.get('videos').each(function (v) {
        //console.log('each video: ', v);
        
        this.renderVideo(v);
      }, this);
    },

    renderVideo: function(video) {
      //console.log('RENDER each video!', video);

      // takes array of 5 items
      // compiles title & description into handlebars template
      // append 5 models onto <aside> tagName/ class=card

    
      //console.log(this.model.attributes.videos.models[0].attributes);
      const path = this.model.attributes.videos.models[0].attributes;
      let json = JSON.stringify(path);
      console.log(json);
      this.$videoList1.html(this.template(json));

      
      //this.$videoList.append(beerView.render().el);

      //this.$el.html(this.template(this.model.toJSON()));

      //this.$videoList.html(this.template(this.model.toJSON()));

      return this;
    }

   
  });
  