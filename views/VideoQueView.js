var VideoQueView = Backbone.View.extend({
    className: 'video-que',

    template: Handlebars.compile($('#video-que-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this 
    }
    
    
})