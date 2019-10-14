var VideoCollection = Backbone.Collection.extend({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q='+query+'&type=video&key=AIzaSyC3YemB3l6du25eOAiAxz1CjaFtCgq1wxw',
    model: videoModel 
});