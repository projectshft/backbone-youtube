// View to render list of videos from collection

var ListView = Backbone.View.extend({
    //connect to this part of DOM <div .container <div .relatedVideosList <ul .videos-list>>>
    className: 'video',
    template: Handlebars.compile($('#list-template').html()),

     // Take Collection of Models and render to #list-template <div .relatedVideosList <ul .videos-list>
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },


});



