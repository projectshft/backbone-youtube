// side videos view for the side imagaes 
var SideVideoView = Backbone.View.extend({
    className: 'side-video',

    template: Handlebars.compile($('#side-video').html()),


    render: function () {

        Handlebars.registerHelper('dotdotdot', function (str) {
            if (str.length > 25)
                return str.substring(0, 25) + '...';
            return str;
        });

        this.$el.html(this.template(this.model.toJSON()));
        return this
    }

})