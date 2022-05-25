const VideoViewerModel = Backbone.Model.extend({
  defaults: {
    video: 'video',
    title: 'title',
    description: 'description'
  }
})


const VideoViewerViewer = Backbone.View.extend({
  template: Handlebars.compile($('#video-view-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.attributes))
    return this
  },

});

const IndividualSidebarModel = Backbone.Model.extend({
  defaults: {
    video: 'video',
    title: 'title'
  }
})

const IndividualSidebarView = Backbone.View.extend({
  template: Handlebars.compile($('#individual-sidebar-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.attributes))
    return this
  },
})

const videoModel = new VideoViewerModel();

const videoViewer = new VideoViewerViewer({ model: videoModel });

const individualSidebarModel = new IndividualSidebarModel();

const individualSidebarViewer = new IndividualSidebarView({ model: individualSidebarModel });

$('.viewer-container').append(individualSidebarViewer.render().el);

$('.sidebar-container').append(videoViewer.render().el);



//-----------------------
//-----------------------vi
//-----------------------
//HANDLEBARS SOURCE CODE
//-----------------------
//-----------------------
//-----------------------
// turn our "template" into html
// var source = $('#video-view-template').html();

// // compile our template html using handlebars
// var template = Handlebars.compile(source);

// // fill our template with information
// var newHTML = template({item: "bread", price: "3"});

// // append our new html to the page
// $('.items').append(newHTML);

// var newHTML2 = template({item: "Cheese", price: "10"});

// $('.items').append(newHTML2);

