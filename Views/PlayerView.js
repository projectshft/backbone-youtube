//View for currently playing video from VideoListView/ Collection

//render to #current-template with <div .currentlyPlaying> holding video in <.player-container> and info in <.content-container>
//listen to video controls??

var PlayerView = Backbone.View.extend({
    className: 'videoPlayer',
    el: $('.currentlyPlaying'),
    template: Handlebars.compile($('#current-template').html()),
    
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})

  

   


