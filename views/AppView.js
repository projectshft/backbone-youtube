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

        //this.listenTo(this.model, 'change:query', this.searchOnEnter);
        
    },
    
//when the user hits 'Enter', the search commences
    searchOnEnter: function(e) {
        //e.preventDefault();
        if (e.which === 13) {
            this.model.set(this.$query.val());
            this.model.get('query');
            //this.model.get('videos').fetchAPIData();
        };
    },

});