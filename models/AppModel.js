//Initial Commit Placeholder //

AppModel = Backbone.Model.extend({
  initialize: function(){
    this.setUrl(this.get('currentQuery'));
  },