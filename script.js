var appModel = new AppModel();

appModel.get('videoList').add([{
        videoId: "T3XA8Jyf9ng",
        title: "Cobra Weave",
        image: "https://youtu.be/T3XA8Jyf9ng",
        description: "Cody weaves"
    },

    {
        videoId:"T3XA8Jyf9ng",
        title: "BIG WAVE SURFING COMPILATION 2017",
        image: "https://i.ytimg.com/vi/rj7xMBxd5iY/default.jpg",
        description: "BIG WAVE SURFING COMPILATION 2017 ** REVISED **AMAZING FOOTAGE ** WITH 60-100FT- HUGE SURF"
    },
]);

var appView = new AppView({
    model: appModel
});

//fetch collection when page loads