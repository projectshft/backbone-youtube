var MainVideoView = Backbone.View.extend({


  template: Handlebars.compile($("#main-display-template").html()),

  el: "#main-display",

  $el: $("#main-display"), //shouldn't it do this automatically?

  constructor: function(model){
    // console.log("argument for constructor");
    // console.log(model);
    this.model=model;
    this.model.on("change", this.render);

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON().attributes));
    return this;
  }

});
