var VideoView = Backbone.View.extend({
    className: 'thumbnails',

    template: Handlebars.compile($ ('#list-template').html()),

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }

});