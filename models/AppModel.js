var AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      vids: new VidCollection(),
      main_vid: null,
    };
  },

  initialize: function(){
    this.listenTo(this, 'change:main_vid', this.updateMainVid)
  },

  upadateMainVid: function(){
    var allVids = this.get('vids');
    var mainVid = allvids.findWhere({id: id});
    this.set('main_vid', mainVid);
  },



});
