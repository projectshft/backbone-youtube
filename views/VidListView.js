// shows the videos in the list template

var VidListView = Backbone.View.extend({
  className: 'vid-list-new',
  attributes: function(){
    return{
      'data-id': this.model.id
    };
  },

  template: Handlebars.compile($('#vid-list-template').html()),

  // render the view in the html
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
