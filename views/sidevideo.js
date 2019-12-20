// side videos view for the side imagaes 
var SideVideoView = Backbone.View.extend({
    className: 'sidevideo',

    template: Handlebars.compile($('#side-video').html()),


    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this
    }
})