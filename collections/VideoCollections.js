
var VideoCollections = Backbone.Collection.extend({
  url: '',
  /* parse the fetched object to only return properties after 'items' */
  initialize: function(){

  },

  parse: function(data){
    var items = data["items"]
    let itemsArray = []
    // console.log(items)
    items.forEach(function(item, index){
      // console.log('ITEM TITLE:')
      let title = item.snippet.title
      let videoId = item.id.videoId
      let thumbnail = item.snippet.thumbnails.medium.url
      // console.log('INDEX: '+index)
      itemsArray.push({
        'title':title,
        'videoId':videoId,
        'thumbnail':thumbnail
      })
    })

    return itemsArray;
  },
  model: VideoModel
});
