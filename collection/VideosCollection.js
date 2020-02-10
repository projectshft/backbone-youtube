var VideosCollection = Backbone.Collection.extend({
    //default search
    url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDIy1DsWoSFSvbwPhCB2lr1r0A9PWwZLbw&part=snippet&type=video&q=lizzo',
    model: VideoModel,

    //AppView will take search value enter on click
    changeSearch: function(search){
        //if search is blank, user will be alerted
        if(search === ''){
            alert('Please fill in search before clicking search.')
        }else{
            //if search is not blank url will change for new search.
            this.url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDIy1DsWoSFSvbwPhCB2lr1r0A9PWwZLbw&part=snippet&type=video&q=beyonce' + search
        };
    },

    //first parse grabs the array of 5 video objects then
    //VideoModel will parse again when creating videos.
    parse: function(response){
        var videoList = response.items;
        return videoList;
    }
});