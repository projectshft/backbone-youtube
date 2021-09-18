var MainVideoView = Backbone.View.extend ({
    className: 'main-video',

    template: Handlebars.compile($('#main-video-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    
});

// <iframe width="500" height="315" src="https://www.youtube.com/embed/{{ videoId }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>