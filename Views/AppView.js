//renders whole screen and trigger renders for its children

var AppView = Backbone.View.extend({
    el: $('body'),



    initialize: function () {
        this.$relatedList = this.$('.related-videos');
        this.listenTo(this.model.get('videoList'), 'add', this.renderVideo);

        //render view as soon as collection finishes sync with API
        this.listenTo(this.model.get('videoList'), 'reset', this.renderVideoList);

        this.renderVideoList();
    },


    renderVideo: function (VideoModel) {
        var listView = new ListView({ model: VideoModel });  
        this.$relatedList.append(listView.render().el); //$el 
    },

    renderVideoList: function () {
        this.model.get('videoList').each(function (m) {
            this.renderVideo(m);
        }, this);
    },

});