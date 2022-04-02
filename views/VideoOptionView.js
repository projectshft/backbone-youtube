let VideoOptionView = Backbone.View.extend({
    className: 'video',
    
    events: {
        'click .player': 'handleSelectVideo'
    },

    handleSelectVideo: function() {

    },

    template: Handlebars.compile($('#video-option-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});