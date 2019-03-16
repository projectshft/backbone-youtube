var VideoModel = Backbone.Model.extend({
    defaults: function () {
        return {
            title: '',
            vidId: '',
            img: '',
            vidInfo: ''
        }
    }
});
