var VideoCollection = Backbone.Collection.extend({
  url:function(){
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=puppies&key=AIzaSyCDHxEwzplSqxvsfDulPcBW9pM-Dis1N7E'
  },

  //API KEY AIzaSyCDHxEwzplSqxvsfDulPcBW9pM-Dis1N7E
//hopeully will replace the url with the searched one, and repopulate the collection
  updateUrl:function(searchTerm){

  var newTerm = this._removeSpaces(searchTerm);
  this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + newTerm + '&key=AIzaSyCDHxEwzplSqxvsfDulPcBW9pM-Dis1N7E'
  this.reset();
  this.fetch()
  },

  model:VideoModel,

  _removeSpaces:function(stringWithSpaces){
    var replacedWithPlus = stringWithSpaces.replace(/ /g,'+');
    return replacedWithPlus;
  },

  addVideo:function(id,title,description,thumb_url){
    this.add({
      videoId:id,
      title:title,
      description:description,
      thumb_url:thumb_url,
      currentVideo:false
    })
  },

  parse:function(response){

    return response.items.map(function(element){
      return{
        title:element.snippet.title,
        videoId:element.id.videoId,
        description:element.snippet.description,
        thumb_url:element.snippet.thumbnails.default.url
      }
    })
  }
})
