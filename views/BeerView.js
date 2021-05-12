// in div with class beer-list
var BeerView = Backbone.View.extend({
  className: "beer",

  template: Handlebars.compile($("#beer-template").html()),

  events: {
    "click .edit": "editBeer",
    "keyup .edit-mode": "handleEditKeyup",
    "click .remove": "removeBeer",
  },

  initialize: function () {
    this.listenTo(this.model, "change:editing", this.renderEditMode);
    this.listenTo(this.model, "change:name", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },

  editBeer: function () {
    this.model.toggleEditMode();
  },

  removeBeer: function () {
    this.model.destroy();
  },

  handleEditKeyup: function (e) {
    if (e.keyCode === 13) {
      var newName = this.$("edit-mode").val();

      this.model.update(newName);
      this.model.toggleEditMode();
    }
  },

  renderEditMode: function () {
    this.$el.toggleClass("editing", this.model.get("editing"));
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});