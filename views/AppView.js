//we should only have one instance of AppView 
var AppView = Backbone.View.extend({

//we should mount our AppView instance to the body element
    el: $('body'),

//since AppView is the controller, it should be responsible for user events
    events: {
        'keypress .form-control' : 'searchOnEnter'
    },
    
//initialize in invoked when our AppView is created; it should listen for new search queries
    initialize: function() {
    
        this.model.get('videos').fetchAPIData(this.model.get('query'));

        this.$query = this.$('#search-query');

        this.$videosListSection = this.$('.video-list-section');

        this.$currentVideoSection = this.$('.current-video-section');
   

       this.template1 = Handlebars.compile(this.$currentVideoSection.html());
       this.template2 = Handlebars.compile(this.$videosListSection.html());
        
       this.render();
    
       this.listenTo(this.model, 'change:query', this.searchOnEnter);
        
    },
    
//when the user hits 'Enter', the search commences
    searchOnEnter: function(e) {
        //e.preventDefault();
        if (e.which === 13) {
            if (this.$query.val().length === 0 ) {
                alert('Enter a valid search term to proceed.');
            } else {
                this.model.set('query', 'this.$query.val()');
                //this.model.get('query');
                this.model.get('videos').fetchAPIData(this.model.get('query'));
            } 
            //this.model.get('videos').fetchAPIData();

            //invoke parse after fetch
        };
    }, 
    // renderVideos : function() {
    //     this.$videosListSection.append(this.model.get('videos').render().el);
    //     console.log($videosListSection)
    // },

    render: function() {
       // this.$el.empty();
       
        this.$currentVideoSection.append(this.model.get('videos').el);
        console.log("the current video section now looks like:", this.$currentVideoSection);
        this.$el.html(this.template1(this.model.get('videos').models[0].attributes));

        for (var i = 0; i < this.model.get('videos').length - 1; i -- ) {
            this.$videosListSection.append(this.model.get('videos').el);
            console.log("the videos list section now looks like:", this.$videosListSection);
            this.$el.html(this.template1(this.model.attributes.videos.models[i].attributes));
        }
        
        return this;

        // this.model.get('videos').each(function () {
        //     this.renderVideos(m);
        // }, this);
    }
       //this.$el.html(this.template(this.model.get('videos').toJSON()));
       // Handlebars.compile($('#current-video-template').html());
        //this.$el.html(this.template(this.model.toJSON()));
       // return this;
        //let newHTML = template({id: this.model.get('videos').id, title: this.model.get('videos').title});
        //$('.current-video').append(newHTML);
        

    //     //loop through items array and create a template for each item
    //     for (var i =0; i < this.model.get('videos').length; i++) {
    //         console.log("The length of the items array is:", items.length);
        
    //     let newHTML = template({id: this.model.get('videos').id, title: this.model.get('videos').title});

    //     //append to the items divi
    //     $('.items').append(newHTML);
    //     };
    //     //OR
    //     //loop through with a forEach
    //     items.forEach(function(obj){
    //     var newHTML = template({item: obj.item, price: obj.price});
    //     $('.items').append(newHTML);
    //     })
    //    return this;

});