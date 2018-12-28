//View for displaying EACH video item

var VideoView = Backbone.View.extend({
    tagName: 'li',
    className: 'videoItem',
    template: Handlebars.compile($ ('#list-template').html()),

    // initialize: function() {
    //     this.listenTo(this.model, '')
    // },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.html(html);
        return this;
    },

    events: {
        'click .view-Video': 'onView'
    },

    // onView: function(){
    //     //change position from list to currently playing
    //     this.model
    // }

});