//View for displaying EACH video item

//listen for click on specific video --(tell Collection to) move it to PlayerView
//render to <li> on <ul> of List-template

// var VideoView = Backbone.View.extend({
//     tagName: 'li',
//     className: 'videoItem',
//     template: Handlebars.compile($ ('#list-template').html()),

//     initialize: function() {
//         // this.videoId = this.item.id.videoId;
//         // this.title = this.item.snippet.title;
//         // this.description = this.item.snippet.description;
//         // this.image = this.snippet.thumnails.default.url;

//         this.listenTo(this.model.get('videoList'), 'add', this.render);
//     },

//     render: function(){
//         this.$el.html(this.template(this.model.toJSON()));
//         this.$el.html(html);
//         return this;
//     },

//     // events: {
//     //     'click .view-Video': 'onView'
//     // },

//     // onView: function(){
//     //     //change position from list to currently playing
//     //     this.model
//     // }

// });