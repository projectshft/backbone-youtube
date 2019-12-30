// side videos view for the side imagaes 
var SideVideoView = Backbone.View.extend({
    className: 'side-videos',

    template: Handlebars.compile($('#side-video').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this
    }



    // render: function () {

    //     this.$el.html(this.template(this.model.map(video => {

    //         video.attributes.thumbnails.url.toJSON()
    //     })));

    //     console.log('this', this)
    //     return this

    // }






    // render: function () {
    //    
    //     var videos = [];
    //     console.log(this.model)
    //     this.$el.html(this.template(this.model.map(video => {
    //         videos.push({ url: video.attributes.thumbnails.url })
    //         console.log('video', videos)
    //         return this.toJSON()
    //     })));
    // console.log('this', this.video)
    // return this.video

    // }
})