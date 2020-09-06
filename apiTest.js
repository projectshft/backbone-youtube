var API_KEY = 'AIzaSyBcGykn4L8KYnJzrg6o-adli3S3kHVwEtU';

apiTest = function(searchTerms) {
    searchTerms = encodeURI(searchTerms);
    var theResponse = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+searchTerms+"type=video&key="+API_KEY;
    console.log(theResponse);
    return theResponse;
  };

  console.log('sending', apiTest("amiga retro"));

var fetchData = function (theResponse) {
  $.ajax({
    method: "GET",
    url: theResponse,
    dataType: "json",
    success: function(data) {
      console.log(data);
      console.log('----------');
      console.log('videoId: ', data.items[0].id.videoId);
      console.log('title: ', data.items[0].snippet.title);
      console.log('desc: ', data.items[0].snippet.description);
      console.log('thumb: ', data.items[0].snippet.thumbnails.default.url);
    },
    error: function(jqXHR, textStatus, errorThrown)
    {console.log(textStatus);}
  });
};

fetchData(apiTest("amiga retro"));