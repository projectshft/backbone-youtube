/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */

var SideVideosView = Backbone.View.extend({
  className: 'side-videos',

  template: Handlebars.compile($('#video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
