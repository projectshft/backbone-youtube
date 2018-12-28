//View to render list of videos from collection

var VideoListView = Backbone.View.extend({
    el: '#video-app',

    //render view as soon as collection finishes sync with API
    initialize: function(){
        this.listenTo(this.collection, 'sync', this.render);
    },

    
    render: function(){
        //empty list container
        var $list = this.$('ul.videos-list').empty();

        //make new view for each model in collection
        this.collection.each(function(model) {
            var item = new VideoView({model: model});
            $list.append(item.render().$el);
        }, this);
        return this;
    },

    
});

//create new instance and associate with its collection
var videosListView = new VideoListView({ collection: videoList});