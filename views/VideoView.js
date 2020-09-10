  // VideoView
  // className: video-listing
  // template: sidebar-vids-template
  // TODO events click - not working

  var VideoView = Backbone.View.extend({
    className: 'video-listing',

    template: Handlebars.compile($('#sidebar-vids-template').html()),

    events: {
      'click .video-listing': 'setOnStage'
    },

    initalize: function () {
      console.log('videoView inits');
      this.listenTo(this.model, 'change:on_stage', this.switchMain); // needs to toggle class visibilty (.d-none)
    },

    setOnStage: function () {
      console.log('selected a vid for OnStage');
      this.model.set('on_stage, true');
      //TODO set other models on_stage to false.  just !-ify them all?
    },

    switchMain: function () {
      //TODO  move to appView?
    },

    render: function () {
      // hide the current video because it's on the main stage
      if (this.model.get('on_stage')) {
        console.log('detected on_stage');
        this.$el.html(this.template(this.model.toJSON())).addClass('d-none');
      }
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });