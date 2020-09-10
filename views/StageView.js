 // StageView
 // className: stage
 // template: #main-stage-template
 // initialize: listen to videoModel change: onstage; refresh render
 // TODO MOVE TO APP VIEW??
 var StageView = Backbone.View.extend({
   className: 'stage',

   template: Handlebars.compile($('#main-stage-template').html()),

   /* initialize: function () {
     TODO perhaps this is where we kick off this render???
     this.listenTo(this.model.get('videos'), 'change:on_stage', this.changeStageVideo);
     this.listenTo(this.model.get('videos'), 'reset', this.changeStageVideo);
   },

   changeStageVideo: function () {
     console.log('changing stage video');
     //replace with findwhere
     this.model.get('videos').each(function (vid) { // find first onStage true
       if (vid.model.get('on_stage')) {
         console.log('found featured video');
       }
       }, this);
   }, */

   render: function () {
     console.log('render main stage');
     console.log('mainView render this is ', this);
     this.$el.html(this.template(this.model.toJSON()));
     return this;
   }

 });