var VideoModel = Backbone.Model.extend ({
  defaults: function () {
    return{
      channelId: channelId,
      title: title,
      description: description,
      thumbnail_url: thumbnail_url

    }
  }
});