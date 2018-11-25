var appModel = new AppModel();

var appView = new AppView({model: appModel});

//default search on page load
appModel.get('videos').fetchQuery("cats");

//working on infinite scroll
// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//        console.log("near bottom!");
//    }
// });
