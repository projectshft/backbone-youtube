var VideoListItemView = Backbone.View.extend({
    model: VideoModel,

    attributes: function(){
        return{
            'data-id': this.model.get('id'),
            class: 'video-list-item',
        }
    },

    template: Handlebars.compile($('#video-list-item').html()),

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})