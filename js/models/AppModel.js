/**
 * Top level model for youtube backbone
 * 
 * holds a collection of videos and current main video
 */

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      main_video: null,
      search: ''
    }
  },

  //listener on search - when it updates, change get request url
  initialize: function() {
    this.listenTo(this, 'change:search', this.updateSearchUrlAndSendGetRequest);
    //reset event is triggered when fetch finishes - set first search result as main_video
    this.listenTo(this.get('videos'), 'reset', this.setMainVideo)
  },

  updateSearchUrlAndSendGetRequest: function() {
    console.log(`Updating url on videos collection with new search "${this.get('search')}"`);
    this.get('videos').getVideos(this.get('search'));
  },

  setMainVideo: function(id) {
    //when called from reset event, there will be no passed in id
    //on view click events, pass in backbone collection cid, will be string like "c6"
    if (typeof id !== 'string') {
      console.log('Setting first video in collection as main video');
      this.set('main_video', this.get('videos').at(0));
      return;
    }
    //else
    console.log(`Setting main video to video with id "${id}"`);
    this.set('main_video', this.get('videos').findWhere({ videoId: id }));
  },

  searchForVideos: function(newSearchString) {
    console.log(`Searching for "${newSearchString}"`);
    this.set('search', newSearchString);
  }
});