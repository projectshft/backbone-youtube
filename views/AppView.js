var AppView = Backbone.View.extend({
  el: '.page',
  events: {
  'keypress .search-bar': 'createOnEnter',
  },
  initialize: function(){
    this.$input = this.$('.search-bar');
    this.listenTo(this.model.get('videos'), 'change:query', this.model.get('videos').fetch({reset:true}));
  },

  createOnEnter: function (e) {
    if (e.which === 13 && this.$input.val()) {

      this.model.get('videos').set('query', this.$input.val());

      this.$input.val('');
    }
  }

});
