var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=bobcats&key=AIzaSyDf8svlqVOB7m84ymG7sTifARWuBKR24_Y',

  model: VideoModel,

  parse: function(response) {

    var self = this;
      // loop through each response
      _.each(response.items, function(item, index) {

        var member = new self.model()
        // parse the data to be held in these variables
        member.set('title', item.snippet.title)
        member.set('description', item.snippet.description)
        member.set('imageSRC', item.snippet.thumbnails.default.url)
        member.set('videoID', item.id.videoId)

        self.push(member)
      });

      return this.models;
  },

  setURL: function(searchTerm) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${searchTerm}&key=AIzaSyDf8svlqVOB7m84ymG7sTifARWuBKR24_Y`
    this.fetch({ reset: true });
  }
});
