//View for displaying EACH video item

//listen for click on specific video --(tell Collection to) move it to PlayerView
//render to <li> on <ul> of List-template

// var VideoView = Backbone.View.extend({
//     // tagName: 'li',
//     className: 'video',
//     template: Handlebars.compile($('#list-template').html()),

    //SHOULD RENDER ITSELF WITH THE TEMPLATE, NO INITIALIZE NEEDED, NO CALL TO RENDER NEEDED
    // initialize: function () {
   

    // //   this.model.get('videoList');
    //   this.listenTo(this.model, 'add change', this.render);
    // }, 

    // render: function () {
    //     this.$el.html(this.template(this.model.toJSON()));
    //     return this;
    // },

    //     // events: {
    //     //     'click .view-Video': 'onView'
    //     // },

    //     // onView: function(){
    //     //     //change position from list to currently playing
    //     //     this.model
    //     // }

// });
