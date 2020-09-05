var VideoThumbnailView = Backbone.View.extend({
  // className: 'thumbnail-view',
  template: Handlebars.compile($('#video-thumbnail-template').html()),

  render: function () {
    console.log('rendering!');
    console.log(this.model);


    // for (let i = 0; i < fiveDaysOfWeather.length; i++) {
    //   const weatherHTML = template(fiveDaysOfWeather[i]);
    //   $('#fiveDayWeatherData').append(weatherHTML);

    this.$el.html(
      this.template()
    );

    return this;
  },
});
