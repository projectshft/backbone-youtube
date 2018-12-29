//View to render list of videos from collection

//set up default/opening view with "surfing" search
//get search input and pass to Collection
//Take Collection of Models and render to #list-template <div .relatedVideosList <ul .videos-list>
    //create new VideoView for each model

// var VideoListView = Backbone.View.extend({
//     el: $('.relatedVideosList'),

//     //render view as soon as collection finishes sync with API
//     initialize: function(){
//         this.listenTo(this.videoList, 'reset', this.render);
//         console.log(this.videoList);
//     },

       
//     render: function(){
// //         //empty list container
// //         var $list = this.$('ul.videos-list').empty();

// //         //make new view for each model in collection
//         this.collection.each(function(model) {
//             var item = new VideoView({model: VideoModel});
//             $list.append(item.render().$el);
//         }, this);
//         return this;
//     },

    
// });
// //create new instance and associate with its collection
// var videosListView = new VideoListView({ collection: videoList });
