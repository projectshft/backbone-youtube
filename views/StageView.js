 // StageView
 // className: stage
 // template: #main-stage-template
 // initialize: listen to videoModel change: onstage; refresh render

 var StageView = Backbone.View.extend({
   className: 'stage',

   template: Handlebars.compile($('#main-stage-template').html()),

   render: function () {
     console.log('render main stage');
     console.log('mainView render this is ', this);
     this.$el.html(this.template(this.model.toJSON()));
     return this;
   }

 });